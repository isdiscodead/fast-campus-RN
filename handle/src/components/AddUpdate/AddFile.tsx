import React, { useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

import WhiteBox from '../StyledComponent/WhiteBox';

type Props = {};

function AddFile({}: Props) {
  const [file, setFile] = useState(undefined);

  return (
    <WhiteBox>
      <Text>심전도 측정 파일 업로드</Text>
      <Input
        type="file"
        value={file}
        onChange={event => setFile(event.target.value)}
      />
    </WhiteBox>
  );
}

const Input = styled.input`
  margin: 1rem;
`;

export default AddFile;
