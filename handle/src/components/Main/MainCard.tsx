import React from 'react';
import {Text, View} from 'react-native';

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
        <Text>{props.title}</Text>
        <Text>{props.content}</Text>
    </View>
  );
};
