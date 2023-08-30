import React from 'react';
import {View} from 'react-native';
import {Typography} from '../Typography';
import WhiteBox from '../StyledComponent/WhiteBox';

export const MainCard: React.FC<{
  content: string;
  title: string;
}> = props => {
  return (
    <WhiteBox
      style={{
        width: 150,
        height: 100,
        margin: 10,
      }}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
        }}>
        <Typography fontSize={14}>{props.title}</Typography>
        <Typography fontSize={18}>{props.content}</Typography>
      </View>
    </WhiteBox>
  );
};
