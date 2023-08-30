import React from 'react';
import { ScrollView } from 'react-native';
import { Typography } from '../Typography';
import QuestionCard from './QuestionCard';

type Props = {};

function AddStress({}: Props) {
  return (
    <ScrollView>
      <Typography>스트레스 자가진단</Typography>
      <QuestionCard question="질문 1" />
      <QuestionCard question="질문 2" />
      <QuestionCard question="질문 3" />
      <QuestionCard question="질문 4" />
    </ScrollView>
  );
}

export default AddStress;
