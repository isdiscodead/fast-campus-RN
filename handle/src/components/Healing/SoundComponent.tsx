import React, { useState } from 'react';
import Sound from 'react-native-sound';
import { Typography } from '../Typography';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { Icon } from '../Icons';

type Props = {
  path: string;
  title: string;
};

function SoundComponent({ path, title }: Props) {
  // TODO: 바깥에서 제어하도록 변경해야 할 듯 ... 한 번에 하나의 사운드만 재생
  // https://github.com/zmxv/react-native-sound/issues/414
  let music = new Sound(path + '.mp4', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('play failed', error);
      console.log(path + '.mp4');
    }
  });

  const [isPlayingNow, setIsPlayingNow] = useState(false);
  console.log(isPlayingNow);

  return (
    <View>
      <Container
        onPress={() => {
          console.log(isPlayingNow);
          if (isPlayingNow) {
            music.reset();
            setIsPlayingNow(false);
          } else {
            // TODO: 화면 뒤로가기 했을 때 끊는 방법 찾아야 함
            music.play();
            setIsPlayingNow(true);
          }
        }}>
        <Icon
          size={24}
          color="#333"
          name={isPlayingNow ? 'pause-circle-outline' : 'play-circle-outline'}
        />
        <Typography fontSize={12}>{title}</Typography>
      </Container>
    </View>
  );
}

const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default SoundComponent;
