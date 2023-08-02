import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Platform, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { useGallery } from './src/use-gallery';
import MyDropDownPicker from './src/MyDropDownPicker';
import TextInputModal from './src/TextInputModal';

const width = Dimensions.get('screen').width;
const columnSize = width / 3.333333 - 10;

export default function App() {
  const { 
    images, imagesWithAddButton, pickImages, deleteImage, 
    selectedAlbum, addAlbum, selectAlbum, albums,
    modalVisible, openModal, closeModal, albumTitle, setAlbumTitle, 
    isDropdownOpen, openDropdown, closeDropdown,
  } = useGallery();

  const onPressOpenGallery = () => {
    pickImages();
  }

  const onLongPress = (id) => {
    deleteImage(id);
  }

  const onPressAddAlbum = () => {
    openModal();
  }

  const onSubmitEditing = () => {
    // 0. 내용이 없을 경우 return 
    if ( !albumTitle ) return;
    // 1. 앨범에 타이틀 추가
    addAlbum();
    // 2. TextInput의 value 초기화 & 모달 닫기
    closeModal();
    setAlbumTitle('');
  }

  const onPressBackdrop = () => {
    closeModal();
  }

  const onPressHeader = () => {
    if (isDropdownOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  }

  const onPressAlbum = () => {
    selectAlbum();
    closeDropdown();
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
      <MyDropDownPicker 
        selectedAlbum={selectedAlbum} 
        onPressAddAlbum={onPressAddAlbum} 
        isDropdownOpen={isDropdownOpen}
        onPressHeader={onPressHeader}
        albums={albums}
        onPressAlbum={onPressAlbum}
      />
      
      {/* 앨범을 추가하는 텍스트 인풋 모달 */}
      <TextInputModal 
        modalVisible={modalVisible}
        albumTitle={albumTitle}
        setAlbumTitle={setAlbumTitle}
        onSubmitEditing={onSubmitEditing}
        onPressBackdrop={onPressBackdrop}
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
