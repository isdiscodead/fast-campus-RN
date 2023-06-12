import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>
        Open up App.js to start working on your app!
      </Text>

      {/* <Image source={require("./puppy.jpeg")} style={styles.local_image} /> */}
      <Image source={{ uri: "https://cdn.imweb.me/upload/S20221028cf7056c180500/681644a787b32.jpg"}} style={styles.local_image} />

      <TextInput placeholder='이름을 입력해주세요' />

      <ScrollView>
        <Button title="Click Me!" onPress={() => {
          console.log("clicked");
        }} />

        <Switch value={true} />
        <Switch value={false} />
      </ScrollView>
    
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
