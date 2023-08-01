import { useState } from "react";
import { Alert } from "react-native";

const defaultAlbum = {
    id: 1,
    title: '기본',
}

export const useGallery = () => {
    const [images, setImages] = useState([]);
    const [albums, setAlbums] = useState([defaultAlbum]);
    const [selectedAlbum, setSelectedAlbum] = useState(defaultAlbum);
    const [albumTitle, setAlbumTitle] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const pickImages = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        const lastId = images.length === 0 ? -1 : images[images.length - 1].id; 
        const newImage = {
            id: lastId + 1,
            uri: result.assets[0].uri,
            albumId: selectAlbum.id,
        }
        setImages([...images, newImage]);
      }
    };

    const deleteImage = (imageId) => {
        Alert.alert("이미지를 삭제하시겠어요?", "", [
            {
                style: 'cancel',
                text: '아니오',
            },
            {
                text: '네',
                onPress: () => {
                    const newImages = images.filter(image => image.id !== imageId);
                    setImages(newImages);
                }
            } 
        ])
    }

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    const openDropdown = () => setIsDropdownOpen(true);
    const closeDropdown = () => setIsDropdownOpen(false);

    const addAlbum = () => {
        const lastId = albums.length === 0 ? -1 : albums[albums.length - 1].id; 
        const newAlbum = {
            id: lastId + 1,
            title: albumTitle,
        };

        setAlbums([
            ...albums,
            newAlbum,
        ])

    }

    const selectAlbum = (album) => {
        setSelectedAlbum(album);
    }

    const filteredImages = images.filter((image) => image.albumId === selectedAlbum.id )

    const imagesWithAddButton = [
        ...images,
        {
            id: -1,
            uri: "",
        }

    ]

    return {
        images: filteredImages,
        imagesWithAddButton,
        pickImages,
        deleteImage,
        selectedAlbum,
        modalVisible,
        openModal,
        closeModal,
        albumTitle, 
        setAlbumTitle,
        addAlbum,
        isDropdownOpen,
        openDropdown,
        closeDropdown,
        albums,
        selectAlbum,
    }
}