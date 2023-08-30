/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import WhiteBox from '../StyledComponent/WhiteBox';
import { Typography } from '../Typography';
import styled from 'styled-components';

type Props = {
  question?: string | undefined;
};

function QuestionCard({ question }: Props) {
  const [sliderValue, setSliderValue] = useState(0);
  const splitValues = [1, 25, 50, 75, 100];

  return (
    <WhiteBox
      style={{
        width: '100%',
        margin: '1rem',
        minHeight: '5rem',
      }}>
      <Typography>질문 어쩌구저쩌구{question ? question : ''}</Typography>
      <Input
        type="range"
        style={{ color: 'var(--grey-background)' }}
        value={sliderValue}
        onChange={e => {
          const target = e.target as HTMLInputElement;
          setSliderValue(target.value);
        }}
        min="0"
        max="100"
        step="1"
      />
      {splitValues.map(posValue => {
        return (
          <>
            <Circle position={posValue} currentValue={sliderValue} />
            <RangeButton
              position={posValue}
              onClick={() => setSliderValue(posValue)}>
              {posValue}%
            </RangeButton>
          </>
        );
      })}
    </WhiteBox>
  );
}

const Input = styled.input`
  position: absolute;
  height: 6px;
  width: 100%;
  z-index: 1;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: var(--green-mint);
    cursor: pointer;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 4px solid var(--white);
    box-shadow: 0px 1px 3px gray;
  }
`;

const Circle = styled.div<{ position: number; currentValue: number }>`
  line-height: 3px;
  position: absolute;
  left: calc(${props => props.position}%);
  top: 50%;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: ${props =>
    props.position > props.currentValue
      ? 'var(--grey-background)'
      : 'var(--green-mint)'};
`;

const RangeButton = styled.button<{ position: number }>`
  position: absolute;
  left: calc(${props => props.position}% - 1.2rem);
  margin: 30px 0;
  padding: 3px 0;
  background: var(--grey-background);
  border-radius: 2em;
  border: none;
  width: 2.4rem;
  text-align: center;
  color: var(--grey-lighter);
  font-size: 0.7em;
  font-weight: var(--bold);
  cursor: pointer;

  :hover {
    background: var(--green-mint);
    color: var(--white);
  }
`;

export default QuestionCard;
