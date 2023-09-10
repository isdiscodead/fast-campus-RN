import React from 'react';
import WhiteBox from '../StyledComponent/WhiteBox';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

type Props = {};

function AddButtons({}: Props) {
  return (
    <Container>
      <WhiteBox>
        <Button>
          <Text>심전도만 기록하기</Text>
        </Button>
      </WhiteBox>
      <WhiteBox>
        <Button>
          <Text>기록 취소하기</Text>
        </Button>
      </WhiteBox>
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Button = styled.TouchableOpacity`
  padding: 5px 20px;
`;

export default AddButtons;
