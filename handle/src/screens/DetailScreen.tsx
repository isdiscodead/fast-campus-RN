import * as React from 'react';
import { Header } from '../components/Header/Header';
import { Background } from '../components/Background';
import NavTabBar from '../components/Navigation/NavTabBar';
import AddFile from '../components/AddUpdate/AddFile';
import AddStress from '../components/AddUpdate/AddStress';

export const DetailScreen: React.FC = () => {
  return (
    <Background>
      <Header>
        <Header.Title title="기록 상세보기" />
        <Header.Icon iconName="close" onPress={() => {}} />
      </Header>
      <AddFile />
      <AddStress />
      <NavTabBar />
    </Background>
  );
};
