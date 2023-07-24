import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Platform, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { useGallery } from './src/use-gallery';
import MyDropDownPicker from './src/MyDropDownPicker';

const width = Dimensions.get('screen').width;
const columnSize = width / 3.333333 - 10;

export default function App() {
  const { images, imagesWithAddButton, pickImages, deleteImage, 
    selectedAlbum } = useGallery();

  const onPressOpenGallery = () => {
    pickImages();
  }

  const onLongPress = (id) => {
    deleteImage(id);
  }

  const renderItem = ({ item: {id, uri}, index }) => {
    if ( id === -1 ) {
      return (
        <TouchableOpacity 
          onPress={onPressOpenGallery}
          style={{ width: columnSize, height: columnSize, backgroundColor: 'lightGray', 
          justifyContent: 'center', alignItems: 'center' }}
        >
          <Image source={{ uri }} />
        </TouchableOpacity>
  
      );
    }

    return (
      <TouchableOpacity
        onLongPress={() => onLongPress(id)}
      >
        <Image source={{ uri }} style={{ width: columnSize, height: columnSize }} />
        <Text style={{ fontSize: 15, fontWeight: '100' }}>+</Text>
      </TouchableOpacity>

    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <MyDropDownPicker selectedAlbumTitle={selectedAlbum.title} onPressAddAlbum={onPressAddAlbum} />
      <FlatList 
        data={imagesWithAddButton}
        renderItem={renderItem}
        numColumns={3}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 30 : 0,
  },
});
