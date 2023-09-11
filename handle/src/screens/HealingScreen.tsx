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
            <SoundComponent path={'shuman'} title={'슈먼파'} />
            <SoundComponent path={'delta'} title={'델타파'} />
          </PlayerContainer>
        </View>
        <View>
          <Typography fontSize={18}>차크라 명상 음악</Typography>
          <PlayerContainer>
            <SoundComponent path={'chakra_1'} title={'루트'} />
            <SoundComponent path={'chakra_2'} title={'천골'} />
            <SoundComponent path={'chakra_3'} title={'태양'} />
            <SoundComponent path={'chakra_4'} title={'마음'} />
            <SoundComponent path={'chakra_5'} title={'목'} />
            <SoundComponent path={'chakra_6'} title={'세 번째 눈'} />
            <SoundComponent path={'chakra_7'} title={'크라운'} />
          </PlayerContainer>
        </View>
        <View>
          <Typography fontSize={18}>만트라 명상</Typography>
          <PlayerContainer>
            <SoundComponent path={'mantra1'} title={'만트라 1'} />
            <SoundComponent path={'mantra2'} title={'만트라 2'} />
            <SoundComponent path={'mantra3'} title={'만트라 3'} />
            <SoundComponent path={'mantra4'} title={'만트라 4'} />
            <SoundComponent path={'mantra5'} title={'만트라 5'} />
          </PlayerContainer>
        </View>
      </Container>
    </Background>
  );
};

const Container = styled.View`
  padding: 12px;
`;

const PlayerContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 24px;
  padding: 5px;
`;
