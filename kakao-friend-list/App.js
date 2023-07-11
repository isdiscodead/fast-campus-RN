import { Platform, StyleSheet, SafeAreaView } from 'react-native';
import Header from './src/Header';

import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MyProfile from './src/MyProfile';

import { friendProfiles, myProfile } from './src/data';
import Margin from './src/Margin';
import Division from './src/Division';
import FriendSection from './src/FriendSection';
import { FriendList } from './src/FriendList';
import { useState } from 'react';
import { TabBar } from './src/TabBar';

const statusBarHeight = getStatusBarHeight(true); // true는 뭐지 ?
const bottomSpace = getBottomSpace();

// test
// console.log(`${Platform.OS}: ${statusBarHeight}, ${bottomSpace}`);

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [seletedTabIdx, setSeletedTabIdx] = useState(0);

  const onPressArrow = () => {
    // console.log("clicked arrow");
    setIsOpened(!isOpened);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['right', 'left']}>
        <Header />

        <Margin height={10} /> 

        <MyProfile 
          uri={myProfile.uri}
          name={ myProfile.name }
          introduction={ myProfile.introduction }
        />

        <Margin height={15} />
        <Division />
        <Margin height={12} />

        <FriendSection 
          friendProfileLength={ friendProfiles.length } 
          onPress={ onPressArrow } 
          isOpened={ isOpened }
        />

        <FriendList 
          data={ friendProfiles }
          isOpened={ isOpened }
        />
      </SafeAreaView>

      <TabBar seletedTabIdx={seletedTabIdx} setSeletedTabIdx={setSeletedTabIdx}/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    paddingTop: statusBarHeight,
    paddingHorizontal: 15,
    // paddingBottom: bottomSpace,
  },
});
