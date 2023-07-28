import { KeyboardAvoidingView, Modal, Platform, SafeAreaView, TextInput } from "react-native";
import { SafeAreaView } from "react-native";

export default ({ modalVisible, albumTitle, setAlbumTitle, onSubmitEditing }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <KeyboardAvoidingView
                behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
                style={{ flex: 1  }}
            >
                <View style={{ flex: 1  }}>
                    <SafeAreaView style={{ position: 'absolute', bottom: 0 }}>
                        <TextInput style={{ width: '100%' }}
                            value={albumTitle}
                            onChangeText={setAlbumTitle}
                            onSubmitEditing={onSubmitEditing}
                        />
                    </SafeAreaView>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
}