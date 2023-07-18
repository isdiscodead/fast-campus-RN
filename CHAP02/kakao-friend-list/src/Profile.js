import React from 'react'
import { View, Image, Text } from 'react-native'
import Margin from './Margin'

import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
`

const ProfileImage = styled.Image`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size * 0.4}px;
`

const TextContainer = styled.View`
  justify-content: center;
  margin-left: 10px;
`

const NameText = styled.Text`
  font-weight: ${(props) => props.isMe ? "bold" : "normal"};
  font-size: ${(props) => props.isMe ? 16 : 16}px;
`

const IntroductionText = styled.Text`
  font-weight: ${(props) => props.isMe ? 12 : 11 }px;
  color: gray;
`

function Profile({ uri, name, introduction, isMe }) {

  const size = isMe ? 50 : 40;

  return (
    <Container>
        <ProfileImage source={{ uri }} />
        <TextContainer>
            <NameText>{ name }</NameText>
            { !!introduction && ( // !!를 통해 boolean 값으로 변경해야 함 
              <View>
                <Margin height={  isMe ? 6 : 2 } />
                <IntroductionText>{ introduction }</IntroductionText>
              </View>
            )}
        </TextContainer>
    </Container>
  )
}

export default Profile