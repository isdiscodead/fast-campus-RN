import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import DocumentPicker, {
  isCancel,
  isInProgress,
  types,
} from 'react-native-document-picker';

import WhiteBox from '../StyledComponent/WhiteBox';
import { Typography } from '../Typography';
import { ElectrocardiogramSampleValue } from 'react-native-health';

type Props = {
  ecg?: ElectrocardiogramSampleValue;
};

function AddFile({ ecg }: Props) {
  const [file, setFile] = useState<string | undefined>(undefined);
  const [rmssd, setRmssd] = useState(0);

  const handleError = (err: unknown) => {
    if (isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      throw err;
    }
  };

  useEffect(() => {
    let ecg_data;
    if (file) {
      ecg_data = file
        .split('mV')[1]
        .split(',')
        .map((row: string) => parseFloat(row))
        .filter((v: number) => !isNaN(v));
    } else if (ecg) {
      // apple일 경우 ecg data 처리
      console.log(ecg);
    }

    if (ecg_data) {
      // 평균과 표준편차 계산
      let ecg_mean = ecg_data.reduce((a, c) => a + c) / ecg_data.length;

      let devTotal = 0; /* 편차값의 합계 구하기 */
      for (var i = 0; i < ecg_data.length; i++) {
        var dev = ecg_data[i] - ecg_mean;
        devTotal += dev * dev;
      }

      // let ecg_var = devTotal / ecg_data.length; /* 모분산값 */
      // let ecg_svar = devTotal / (ecg_data.length - 1); /* 표본분산값 */
      let ecg_std = parseFloat(
        Math.sqrt(devTotal / ecg_data.length).toFixed(5),
      ); /* 모표준편차값 */
      // let ecg_sstd = Math.sqrt(devTotal / (ecg_data.length - 1));

      // 이상치 제거 (5σ 범위 밖)
      ecg_data = ecg_data.filter(
        (x: number) => Math.abs(x - ecg_mean) < 5 * ecg_std,
      );

      // R-peak 찾기 (간단한 알고리즘 사용)
      let r_peaks_locs = [];
      for (let i = 1; i < ecg_data.length - 1; i++) {
        if (
          ecg_data[i] > 0.4 &&
          ecg_data[i] > ecg_data[i - 1] &&
          ecg_data[i] > ecg_data[i + 1]
        ) {
          if (
            (i >= 60 && r_peaks_locs.length === 0) ||
            i - r_peaks_locs[r_peaks_locs.length - 1] >= 150
          ) {
            r_peaks_locs.push(i + 1);
          }
        }
      }

      // RR 간격 계산
      let rr_intervals_ms = [];
      for (let i = 0; i < r_peaks_locs.length - 1; i++) {
        rr_intervals_ms.push(
          ((r_peaks_locs[i + 1] - r_peaks_locs[i]) / 500) * 1000,
        );
      }

      // RMSSD 값 계산
      // RMSSD 계산
      let sum_of_squares = 0;
      for (let i = 0; i < rr_intervals_ms.length - 1; i++) {
        let diff = rr_intervals_ms[i + 1] - rr_intervals_ms[i];
        sum_of_squares += diff * diff;
      }

      let tmp_rmssd = Math.sqrt(sum_of_squares / (rr_intervals_ms.length - 1));
      setRmssd(tmp_rmssd);
    }
  }, [file, ecg]);

  return (
    <Container>
      <WhiteBox>
        <AddFileButton
          onPress={async () => {
            try {
              const pickerResult = await DocumentPicker.pickSingle({
                presentationStyle: 'fullScreen',
                copyTo: 'cachesDirectory',
                type: types.csv,
              });
              const response = await fetch(pickerResult.uri);
              const text = await response.text();
              setFile(text);
            } catch (e) {
              handleError(e);
            }
          }}>
          <Text>심전도 측정 파일</Text>
          <Text>업로드</Text>
        </AddFileButton>
      </WhiteBox>
      <WhiteBox style={{ flex: 1, padding: '2%' }}>
        {file && (
          <>
            <Typography fontSize={14} textAlign="center">
              측정 결과
            </Typography>
            <Typography fontSize={16} textAlign="center">
              RMSSD: {rmssd.toFixed(2)}
            </Typography>
            <Typography fontSize={14} textAlign="center">
              {rmssd > 14 || rmssd < 7
                ? '스트레스에 취약한 상태일 수 있습니다'
                : '심박변이가 안정적입니다.'}
            </Typography>
          </>
        )}
        {!file && (
          <Typography fontSize={16}>
            심전도 측정 결과 csv 파일을 업로드 해주세요
          </Typography>
        )}
      </WhiteBox>
    </Container>
  );
}

const AddFileButton = styled.TouchableOpacity`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  diplay: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  margin: 10px;
`;

export default AddFile;
