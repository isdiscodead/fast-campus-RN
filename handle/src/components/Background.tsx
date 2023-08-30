import React from 'react';
import {ImageBackground, View} from 'react-native';

export const Background: React.FC = ({children}) => {
  return (
    <ImageBackground
      source={require('../imgs/background.jpeg')}
      style={{flex: 1}}
      blurRadius={30}>
      {children}
    </ImageBackground>
  );
};
