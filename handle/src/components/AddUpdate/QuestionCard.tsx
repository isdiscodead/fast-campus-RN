/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { useEffect, useState } from 'react';
import WhiteBox from '../StyledComponent/WhiteBox';
import { Typography } from '../Typography';
import Slider from '@react-native-assets/slider/dist/Slider';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

type Props = {
  question?: string | undefined;
  idx: number;
  setAnswer: (idx: number, value: number) => void;
  answers: { idx: number; value: number }[];
};

function QuestionCard({ question, idx, setAnswer, answers }: Props) {
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    const filtered = answers.filter(v => v.idx === idx);
    if (filtered.length !== 0) {
      setSliderValue(filtered[0].value);
    } else {
      setSliderValue(0);
    }
  }, [idx, answers]);

  const setValue = (index: number, value: number) => {
    setSliderValue(value);
    setAnswer(index, value);
  };

  return (
    <WhiteBox
      style={{
        width: '95%',
        padding: '5%',
      }}>
      <Typography fontSize={16}>{question ? question : ''}</Typography>
      <Slider
        value={sliderValue}
        minimumValue={1}
        maximumValue={5}
        step={1}
        minimumTrackTintColor="pink"
        maximumTrackTintColor="white"
        slideOnTap={true}
        onValueChange={v => setAnswer(idx, v)}
      />
      <Labels>
        <TouchableOpacity onPress={() => setValue(idx, 1)}>
          <Text>전혀 X</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setValue(idx, 2)}>
          <Text>다소 X</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setValue(idx, 3)}>
          <Text>보통</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setValue(idx, 4)}>
          <Text>다소 O</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setValue(idx, 5)}>
          <Text>매우 O</Text>
        </TouchableOpacity>
      </Labels>
    </WhiteBox>
  );
}

const Labels = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default QuestionCard;
