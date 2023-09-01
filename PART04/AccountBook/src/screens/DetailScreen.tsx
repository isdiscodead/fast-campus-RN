import React from 'react';
import {Header} from '../components/Header/Header';
import {View} from 'react-native';

type Props = {};

function DetailScreen({}: Props) {
  return (
    <View>
      <Header>
        <Header.Title title="DETAIL SCREEN" />
        <Header.Icon iconName="close" onPress={() => {}} />
      </Header>
    </View>
  );
}

export default DetailScreen;
