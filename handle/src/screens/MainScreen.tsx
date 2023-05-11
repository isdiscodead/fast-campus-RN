import React from 'react'
import { Header } from '../components/Header/Header'
import { View,  ImageBackground, } from 'react-native'

export const MainScreen:React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../imgs/background.jpeg')}
        style={{ flex: 1 }}
        blurRadius={30}
      >
          <Header>
              <Header.Title title="HANDLE" />
              <Header.Icon iconName="close" onPress={() => {}} />
          </Header>
        </ImageBackground>
    </View>
  )
}