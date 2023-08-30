import React from 'react';
import {Header} from '../components/Header/Header';
import {ImageBackground, View} from 'react-native';
import {useRootNavigation} from '../navigations/RootNavigation';

export const AddUpdateScreen: React.FC = () => {
  const navigation = useRootNavigation();

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../imgs/background.jpeg')}
        style={{flex: 1}}
        blurRadius={30}>
        <Header>
          <Header.Title title="기록 추가하기" />
          <Header.Icon
            iconName="close"
            onPress={() => {
              navigation.pop();
            }}
          />
        </Header>
      </ImageBackground>
    </View>
  );
};
