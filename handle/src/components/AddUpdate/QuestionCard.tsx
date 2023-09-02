/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { useState } from 'react';
import WhiteBox from '../StyledComponent/WhiteBox';
import { Typography } from '../Typography';
import styled from 'styled-components/native';
import Slider from '@react-native-assets/slider/dist/RangeSlider';

type Props = {
  question?: string | undefined;
};

function QuestionCard({ question }: Props) {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <WhiteBox
      style={{
        width: '90%',
        height: '100%',
      }}>
      <Typography>질문 어쩌구저쩌구{question ? question : ''}</Typography>
      <Slider
        style={{}}
        minimumValue={1}
        maximumValue={5}
        value={sliderValue}
        step={1}
        inverted={true}
        vertical={true}
        minimumTrackTintColor="blue"
        maximumTrackTintColor="red"
        onValueChange={setSliderValue}
      />
    </WhiteBox>
  );
}

export default QuestionCard;
