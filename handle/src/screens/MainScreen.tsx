import React from 'react'
import { Header } from '../components/Header/Header'
import { View } from 'react-native/types'

export const MainScreen:React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
        <Header>
            <Header.Title title="HANDLE" />
            <Header.Icon iconName="close" onPress={() => {}} />
        </Header>
    </View>
  )
}