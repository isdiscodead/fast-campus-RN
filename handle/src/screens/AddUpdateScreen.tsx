import React from 'react';
import { View } from 'react-native';
import { Header } from '../components/Header/Header';
import { useRootNavigation } from '../navigations/RootNavigation';
import { Background } from '../components/Background';
import NavTabBar from '../components/Navigation/NavTabBar';
import AddFile from '../components/AddUpdate/AddFile';
import AddStress from '../components/AddUpdate/AddStress';

export const AddUpdateScreen: React.FC = () => {
  const navigation = useRootNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Background>
        <View style={{ flex: 1 }}>
          <Header>
            <Header.Title title="기록 추가하기" />
            <Header.Icon
              iconName="close"
              onPress={() => {
                navigation.pop();
              }}
            />
          </Header>

          <NavTabBar />
        </View>
      </Background>
    </View>
  );
};
