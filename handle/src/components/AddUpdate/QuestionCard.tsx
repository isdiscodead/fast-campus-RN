/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { useState } from 'react';
import WhiteBox from '../StyledComponent/WhiteBox';
import { Typography } from '../Typography';
import Slider from '@react-native-assets/slider/dist/Slider';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

type Props = {
  question?: string | undefined;
};

function QuestionCard({ question }: Props) {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <WhiteBox
      style={{
        width: '95%',
        padding: '5%',
      }}>
      <Typography fontSize={16}>
        질문 어쩌구저쩌구{question ? question : ''}
      </Typography>
      <Slider
        value={sliderValue}
        minimumValue={1}
        maximumValue={5}
        step={1}
        minimumTrackTintColor="pink"
        maximumTrackTintColor="white"
        slideOnTap={true}
        onValueChange={setSliderValue}
      />
      <Labels>
        <TouchableOpacity onPress={() => setSliderValue(1)}>
          <Text>전혀 X</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSliderValue(2)}>
          <Text>다소 X</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSliderValue(3)}>
          <Text>보통</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSliderValue(4)}>
          <Text>다소 O</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSliderValue(5)}>
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
