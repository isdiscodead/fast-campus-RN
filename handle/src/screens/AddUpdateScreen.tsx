import React from 'react'
import { Header } from '../components/Header/Header'
import { View } from 'react-native/types'

export const AddUpdateScreen:React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
        <Header>
            <Header.Title title="기록 추가하기" />
            <Header.Icon iconName="close" onPress={() => {}} />
        </Header>
    </View>
  )
}