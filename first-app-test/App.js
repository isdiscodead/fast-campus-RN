import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import StateWithClassComponent from './StateWithClassComponent';
import StateWithFunctionalComponent from './StateWithFunctionalComponent';
import UseEffectWithClassComponent from './UseEffectWithClassComponent';
import UseEffectWithFunctionalComponent from './UseEffectWithFunctionalComponent';

const Header = (props) => {
    return <Text>{ props.title }</Text>;
};

const MyProfile = () => {
    return <Profile name="이지원" uri="https://blog.kakaocdn.net/dn/bYDBlF/btq10Q3U3zv/nTl8IEetUB9DWRsopJSMK0/img.png" profileSize={50}/>;
};


const Division = () => {
    return <Text>Division</Text>;
};

const FriendSection = () => {
    return <Text>FriendSection</Text>;
};

const FriendList = () => {
    return (  
        <View>
            <Profile name="연성묵" profileSize={30} uri="https://i.namu.wiki/i/zvx_qiumFLLDz4jlIXrRyI0MqSvnhFvE0i6pfZFCZj3m-oT68uXaHlTwmVHlKBQG0AGzPYGHpqCkoWsZCaDHbw.webp"></Profile>
            <Profile name="꽁치" profileSize={30} uri="https://cdn.ppomppu.co.kr/zboard/data3/2019/0227/m_20190227061454_yzfigkvs.jpg"></Profile>
            <Profile name="연성민" profileSize={30} uri="https://png.pngtree.com/thumb_back/fh260/background/20210409/pngtree-rules-of-biotex-cat-image_600076.jpg"></Profile>
            <Profile name="문정현" profileSize={30} uri="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"></Profile>
        </View>
    );
};

/*
const Profile = (props) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <Image 
                source = {{
                    uri: props.uri
                }}
                style = {{
                    width: props.profileSize,
                    height: props.profileSize,
                }}
            />
            <Text>{ props.name } </Text>
        </View>
    )
}
*/

class Profile extends React.Component {
    render() {
        return (
            <View style={{ flexDirection: "row" }}>
                <Image 
                    source = {{
                        uri: this.props.uri
                    }}
                    style = {{
                        width: this.props.profileSize,
                        height: this.props.profileSize,
                    }}
                />
                <Text>{ this.props.name } </Text>
            </View>
        )
    }
}

export default function App() {

    const [isTrue, setIsTrue] = useState(true);
    
    return (
        <View style={ styles.container }>  
            {/* 
            <Header title="친구" />  
            <MyProfile />  
            <Division />  
            <FriendSection />  
            <FriendList />  

            <StateWithClassComponent />
            <StateWithFunctionalComponent />
            */}
            { isTrue ? <UseEffectWithClassComponent /> : null }
            { isTrue && <UseEffectWithFunctionalComponent /> }

            <Button title="toggle" onPress={ ()=>setIsTrue(!isTrue) } />
        </View>
    ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
