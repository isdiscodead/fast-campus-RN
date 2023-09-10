import * as React from 'react';
import { Header } from '../components/Header/Header';
import { Background } from '../components/Background';
import { useRootNavigation } from '../navigations/RootNavigation';
import { View } from 'react-native';
import { Typography } from '../components/Typography';
import styled from 'styled-components/native';
import SoundComponent from '../components/Healing/SoundComponent';

export const HealingScreen: React.FC = () => {
  const navigation = useRootNavigation();

  return (
    <Background>
      <Header>
        <Header.Title title="마음 챙기기" />
        <Header.Icon iconName="close" onPress={() => navigation.pop()} />
      </Header>
      <Container>
        <View>
          <Typography fontSize={18}>힐링 주파수</Typography>
          <PlayerContainer>
            <SoundComponent path={'chakra_1'} title={'델타파'} />
          </PlayerContainer>
        </View>
        <Typography fontSize={18}>만트라 시작하기</Typography>
      </Container>
    </Background>
  );
};

const Container = styled.View`
  padding: 12px;
`;

const PlayerContainer = styled.View``;
