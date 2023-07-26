import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Platform, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { useGallery } from './src/use-gallery';
import MyDropDownPicker from './src/MyDropDownPicker';
import TextInputModal from './src/TextInputModal';

const width = Dimensions.get('screen').width;
const columnSize = width / 3.333333 - 10;

export default function App() {
  const { images, imagesWithAddButton, pickImages, deleteImage, 
    selectedAlbum, modalVisible, openModal, closeModal } = useGallery();

  const onPressOpenGallery = () => {
    pickImages();
  }

  const onLongPress = (id) => {
    deleteImage(id);
  }

  const onPressAddAlbum = () => {
    openModal();
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
      {/* 앨범 drop down, 앨범 추가 버튼 */}
      <MyDropDownPicker selectedAlbumTitle={selectedAlbum.title} onPressAddAlbum={onPressAddAlbum} />
      
      {/* 앨범을 추가하는 텍스트 인풋 모달 */}
      <TextInputModal 
        modalVisible={modalVisible}
      />

      {/* 이미지 리스트 */}
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
