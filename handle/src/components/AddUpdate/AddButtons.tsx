import React from 'react';
import WhiteBox from '../StyledComponent/WhiteBox';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

type Props = {};

function AddButtons({}: Props) {
  return (
    <Container>
      <WhiteBox>
        <TouchableOpacity>
          <Text>심전도만 기록하기</Text>
        </TouchableOpacity>
      </WhiteBox>
      <WhiteBox>
        <TouchableOpacity>
          <Text>기록 취소하기</Text>
        </TouchableOpacity>
      </WhiteBox>
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default AddButtons;
