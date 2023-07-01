import { Platform, StyleSheet, SafeAreaView } from 'react-native';
import Header from './src/Header';

import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

const statusBarHeight = getStatusBarHeight(true); // true는 뭐지 ?
const bottomSpace = getBottomSpace();

// test
// console.log(`${Platform.OS}: ${statusBarHeight}, ${bottomSpace}`);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    // padingTop: statusBarHeight,
    // paddingBottom: bottomSpace,
  },
});
