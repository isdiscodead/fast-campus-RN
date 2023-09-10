import React, { useState } from 'react';
import Sound from 'react-native-sound';
import { Typography } from '../Typography';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { Icon } from 'react-native-vector-icons/Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  path: string;
  title: string;
};

function SoundComponent({ path, title }: Props) {
  let music = new Sound('../../../sounds/' + path, error => {
    if (error) {
      console.log('play failed');
    }
  });

  const [isPlayingNow, setIsPlayingNow] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          isPlayingNow ? setIsPlayingNow(false) : setIsPlayingNow(true);
          isPlayingNow ? music.pause() : music.play();
        }}>
        <Icon name={isPlayingNow ? 'controller-play' : 'controller-pause'} />
        <Typography>{title}</Typography>
      </TouchableOpacity>
    </View>
  );
}

export default SoundComponent;
