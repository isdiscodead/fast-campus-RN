import React from 'react';
import {ImageBackground} from 'react-native';

interface Props {
  children: React.ReactNode;
}

export const Background = ({children}: Props) => {
  return (
    <ImageBackground
      source={require('../imgs/background.jpeg')}
      style={{flex: 1}}
      blurRadius={30}>
      {children}
    </ImageBackground>
  );
};
