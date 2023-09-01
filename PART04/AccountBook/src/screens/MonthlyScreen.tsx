import React from 'react';
import {Header} from '../components/Header/Header';
import {View} from 'react-native';

type Props = {};

function MonthlyScreen({}: Props) {
  return (
    <View>
      <Header>
        <Header.Title title="MONTHLY SCREEN" />
        <Header.Icon iconName="close" onPress={() => {}} />
      </Header>
    </View>
  );
}

export default MonthlyScreen;
