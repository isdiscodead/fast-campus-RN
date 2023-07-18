import { Platform, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Header from './src/Header';

import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MyProfile from './src/MyProfile';
import Profile from './src/Profile';

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
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow = () => {
    // console.log("clicked arrow");
    setIsOpened(!isOpened);
  }

  // flatlist 이용 예시
  const ItemSeparatorComponent = () => <Margin height={13} />

  const renderItem = ({ item }) => (
    <View>
      <Profile
        uri={item.uri}
        name={item.name}
        introduction={item.introduction}
        isMe={false}
      />
    </View>
  );

  const ListHeaderComponent = () => (
    <div style={{ backgroundColor: "white" }}>
      <Header />

        <Margin height={10} /> 

        <Profile 
          uri={myProfile.uri}
          name={ myProfile.name }
          introduction={ myProfile.introduction }
          isMe={true}
        />

        <Margin height={15} />
        <Division />
        <Margin height={12} />

        <FriendSection 
          friendProfileLength={ friendProfiles.length } 
          onPress={ onPressArrow } 
          isOpened={ isOpened }
        />
        
        <Margin height={12} />
    </div>
  );

  const ListFooterComponent = () => null;

  return (
    <View style={styles.container}>
      <FlatList
        data={isOpened ? friendProfiles : [] } // 이렇게도 조건부 렌더링 가능
        contentContainerStyle={{ paddingHorizontal: 15 }}
        keyExtractor={(_, index) => index}
        stickyHeaderIndices={[0]} // 첫 번째 헤더 고정 
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        showsVerticalScrollIndicator={false}
      >
      </FlatList>
      <TabBar selectedTabIdx={selectedTabIdx} setSelectedTabIdx={setSelectedTabIdx}/>
    </View>
  );

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

      <TabBar selectedTabIdx={selectedTabIdx} setSelectedTabIdx={setSelectedTabIdx}/>
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
