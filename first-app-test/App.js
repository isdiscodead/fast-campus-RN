import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const Header = (props) => {
    return <Text>{ props.title }</Text>;
};

const MyProfile = () => {
    return <Text>MyProfile</Text>;
};


const Division = () => {
    return <Text>Division</Text>;
};

const FriendSection = () => {
    return <Text>FriendSection</Text>;
};

const FriendList = () => {
    return <Text>FriendList</Text>;
};

export default function App() {
  return (
    <View style={ styles.container }>  
        <Header title="친구" />  
        <MyProfile />  
        <Division />  
        <FriendSection />  
        <FriendList />  
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: bold,
  },
  local_image: {
    width: 100,
    height: 100,
  }
});
