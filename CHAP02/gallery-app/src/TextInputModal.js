import { KeyboardAvoidingView, Modal, Platform, SafeAreaView, TextInput } from "react-native";
import { SafeAreaView } from "react-native";

export default ({ modalVisible }) => {
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
                        <TextInput style={{ width: '100%' }}/>
                    </SafeAreaView>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
}