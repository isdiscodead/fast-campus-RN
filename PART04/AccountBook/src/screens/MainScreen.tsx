import React, {useState} from 'react';
import {Header} from '../components/Header/Header';
import {View} from 'react-native';
import {AccountBookHistory} from '../data/AccountBookHistory';

type Props = {};

function MainScreen({}: Props) {
  const now = new Date().getTime();
  const [list, setList] = useState<AccountBookHistory[]>([
    {
      id: 0,
      type: '지출',
      price: 10000,
      comment: 'TEST_01',
      createdAt: now,
      updatedAt: now,
      photoUrl: null,
    },
    {
      id: 1,
      type: '수입',
      price: 20000,
      comment: 'TEST_01',
      createdAt: now,
      updatedAt: now,
      photoUrl:
        'https://image.newsis.com/2023/07/12/NISI20230712_0001313626_web.jpg',
    },
  ]);
  return (
    <View>
      <Header>
        <Header.Title title="MAIN SCREEN" />
      </Header>
    </View>
  );
}

export default MainScreen;
