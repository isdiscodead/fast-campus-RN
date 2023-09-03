import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Typography } from '../Typography';
import QuestionCard from './QuestionCard';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

type Props = {};

function AddStress({}: Props) {
  return (
    <Container>
      <Typography fontSize={18}>스트레스 자가진단</Typography>
      <ScrollView horizontal={false} style={{ width: '100%' }}>
        <QuestionCard question="질문 1" />
        <QuestionCard question="질문 2" />
        <QuestionCard question="질문 3" />
        <ButtonContainer>
          <TouchableOpacity>
            <Text>이전</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>다음</Text>
          </TouchableOpacity>
        </ButtonContainer>
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.View``;

export default AddStress;
