import { View, Text } from "react-native";

const headerHeight = 50;

export default({ selectedAlbumTitle, onPressAddAlbum }) => {
    return (
        <View style={{ 
            height: headerHeight,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{ fontWeight: 'bold' }}>{ selectedAlbumTitle }</Text>

            <View 
                onPress={onPressAddAlbum}
                style={{ position: "absolute", right: 0, height: headerHeight, 
                    justifyContent: 'center', alignItems: 'center',
                    paddingHorizontal: 10,
                }}
            >
                <Text style={{ fontSize: 12 }}>앨범 추가</Text>
            </View>
        </View>
    )
}