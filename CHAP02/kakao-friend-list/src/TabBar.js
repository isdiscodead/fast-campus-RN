import { Fontisto, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

const bottomSpace = getBottomSpace();

const TabButton = ({
  isSelected,
  onPress,
  activeIconName,
  inactiveIconName,
  isIconFontisto,
  isIconIonicons,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 10,
    }} >
      { isIconFontisto && <Fontisto name={isSelected ? activeIconName : inactiveIconName } size={24} color={black} /> }
      { isIconIonicons && <Ionicons name={isSelected ? activeIconName : inactiveIconName } size={24} color={black} /> }
    </TouchableOpacity>
  )
}


export const TabBar = ({selectedTabIdx, setSelectedTabIdx}) => {
  return (
    <View style={{ 
      flexDirection: "row", 
      width: "100%", height: 50, 
      backgroundColor: "lightblue",
      paddingBottom: bottomSpace
      }}>
        <TabButton 
          isSelected={selectedTabIdx === 0}
          onPress={() => setSelectedTabIdx(0)}
          activeIconName={"person"}
          inactiveIconName={"persons"}
          isIconFontisto
        />
        <TabButton 
          isSelected={selectedTabIdx === 1}
          onPress={() => setSelectedTabIdx(1)}
          activeIconName={"chatbubble"}
          inactiveIconName={"chatbubble-outline"}
          isIconIonicons
        />
        <TabButton 
          isSelected={selectedTabIdx === 2}
          onPress={() => setSeletedTabIdx(2)}
          activeIconName={"pricetag"}
          inactiveIconName={"pricetag-outline"}
          isIconIonicons
        />
        <TabButton 
          isSelected={selectedTabIdx === 3}
          onPress={() => setSeletedTabIdx(3)}
          activeIconName={"add-circle"}
          inactiveIconName={"add-circle-outline"}
          isIconIonicons
        />
    </View>
  )
}
 