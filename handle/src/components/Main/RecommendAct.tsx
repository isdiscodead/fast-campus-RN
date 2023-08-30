import React from 'react';
import {Typography} from '../Typography';
import {View} from 'react-native';

type Props = {};

function RecommendAct({}: Props) {
  return (
    <View>
      <Typography fontSize={16}>
        ✓{' '}
        {'저녁 시간이 다가오고 있어요! 저녁 식사 전에 가벼운 운동 어떠신가요?'}
      </Typography>
      <Typography fontSize={16}>
        ✓{' '}
        {
          '현재 걸음 수가 충분히 높으시네요, 부지런히 돌아다니신 것 같아요. 칭찬합니다 👏'
        }
      </Typography>
    </View>
  );
}

export default RecommendAct;
