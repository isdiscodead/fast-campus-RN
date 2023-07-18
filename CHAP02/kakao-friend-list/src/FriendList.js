import React from 'react'
import { ScrollView, View } from 'react-native'
import Profile from './Profile'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import Margin from './Margin';

const bottomSpace = getBottomSpace();

export const FriendList = (props) => {
    return props.isOpened && (
      <ScrollView showsHorizontalScrollIndicator={false} 
          contentContainerStyle={{ paddingBottom: bottomSpace }}>
          {
              props.data.map((item, idx) => {
                  <View key={idx}> 
                      <Profile 
                      uri={item.uri}
                      name={item.name}
                      introduction={item.introduction}
                      />
                      <Margin height={13} />
                  </View>
              })
          }
      </ScrollView>
    )
}
