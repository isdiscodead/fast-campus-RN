import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import DocumentPicker, {
  DocumentPickerResponse,
  isCancel,
  isInProgress,
  types,
} from 'react-native-document-picker';

import WhiteBox from '../StyledComponent/WhiteBox';

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
    <WhiteBox>
      <Text>심전도 측정 파일 업로드</Text>
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
        }}
      />
    </WhiteBox>
  );
}

const AddFileButton = styled.TouchableOpacity`
  display: flex;
  padding: 32px;
  margin: 16px;
  justify-content: center;
  align-items: center;
`;
export default AddFile;
