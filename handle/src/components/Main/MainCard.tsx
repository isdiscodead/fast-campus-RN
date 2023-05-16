import React from 'react';
import {Text, View} from 'react-native';
import { Typography } from '../Typography';

export const MainCard: React.FC<{
    content: string;
    title: string;
  }> = props => {

  return (
    <View
      style={{
        backgroundColor: "#ffffff40",
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        borderRadius: 10,
        width: 150,
        height: 150,
        margin: 10,
      }}
    >
      <View>
        <Typography fontSize={14}>{props.title}</Typography>
        <Typography fontSize={18}>{props.content}</Typography>
      </View>
    </View>
  );
};
