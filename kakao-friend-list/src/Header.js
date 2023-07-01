import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

//icon
import { Ionicons } from '@expo/vector-icons';

const IconButton = () => {
  return (
    <View>
      <Ionicons name="ios-settings-outline" size={24} color="black" />
    </View>
  );
}

export default function Header() {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10 }} >
      <Text style={{ fontSize: 22, fontWeight: 'bold', }}>친구</Text>

      <View style={{ flexDirection: "row" }}>
        <IconButton />
        <IconButton />
        <IconButton />
        <IconButton />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({ 
})