import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

export default function FriendSection(props) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: "gray" }}>친구 { props.friendProfileLen }</Text>

        <TouchableOpacity onPress={ props.onPress }>
            <MaterialIcons name={ props.isOpened ? "keyboard-arrow-up" : "keyboard-arrow-down" } size={24} color="lightgray" />
        </TouchableOpacity>
    </View>
  )
}
