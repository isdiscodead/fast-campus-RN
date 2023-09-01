import React from 'react';
import {Header} from '../components/Header/Header';
import {View} from 'react-native';

type Props = {};

function AddUpdateScreen({}: Props) {
  return (
    <View>
      <Header>
        <Header.Title title="ADD/UPDATE SCREEN" />
        <Header.Icon iconName="close" onPress={() => {}} />
      </Header>
    </View>
  );
}

export default AddUpdateScreen;
