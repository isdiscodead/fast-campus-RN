import React, { useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import DocumentPicker, {
  DocumentPickerResponse,
  isCancel,
  isInProgress,
  types,
} from 'react-native-document-picker';

import WhiteBox from '../StyledComponent/WhiteBox';
import { Typography } from '../Typography';

type Props = {};

function AddFile({}: Props) {
  const [file, setFile] = useState<DocumentPickerResponse[] | undefined>(
    undefined,
  );

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
              setFile([pickerResult]);
            } catch (e) {
              handleError(e);
            }
          }}>
          <Text>심전도 측정 파일</Text>
          <Text>업로드</Text>
        </AddFileButton>
      </WhiteBox>
      <WhiteBox style={{ flex: 1 }}>
        <Typography>측정 결과</Typography>
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
