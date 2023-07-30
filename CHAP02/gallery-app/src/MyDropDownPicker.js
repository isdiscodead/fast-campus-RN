import { SimpleLineIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

const headerHeight = 50;

export default({ isDropdownOpen, onPressHeader, selectedAlbumTitle, onPressAddAlbum, albums, onPressAlbum }) => {
    return (
        <View>
        <TouchableOpacity 
            activeOpacity={1} // 헤더 깜빡임 방지
            onPress={onPressHeader}
            style={{ 
                height: headerHeight,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
            }}
        >
            <Text style={{ fontWeight: 'bold' }}>{ selectedAlbumTitle }</Text>
            <SimpleLineIcons 
                name={ isDropdownOpen ? 'arrow-down' : 'arrow-up' }
                size={ 12 }
                color='black'
                style={{ marginLeft: 8 }}
            />

            <View 
                onPress={onPressAddAlbum}
                style={{ position: "absolute", right: 0, height: headerHeight, 
                    justifyContent: 'center', alignItems: 'center',
                    paddingHorizontal: 10,
                }}
            >
                <Text style={{ fontSize: 12 }}>앨범 추가</Text>
            </View>
        </TouchableOpacity>
            { isDropdownOpen && (
                    <View
                        style={{
                            position: 'absolute',
                            top: headerHeight,
                            width: '100%', 
                            height: 100,
                            backgroundColor: 'lightblue',
                        }}
                    >
                        { albums.map((album, idx) => {
                            <TouchableOpacity
                                onPress={() => onPressAlbum(album)}
                                key={`album - ${idx}`}
                            >
                                <Text>{ album.title } </Text>
                            </TouchableOpacity>
                        }) }
                    </View>
                )}
        </View>
    )
}