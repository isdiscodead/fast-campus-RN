import React from 'react'
import { ActivityIndicator, Button, View } from 'react-native';

export default function UseEffectWithFunctionalComponent() {

    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(true);
    const [input, setInput] = useState("");
    const [isRefresh, setIsRefresh] = useState(false);

    // 빈 배열을 의존성 배열로 사용하면 최초 1회 실행
    useEffect(() => {
        console.log('didMount');
    }, []);

    // count가 업데이트 될 때마다 
    useEffect(() => {
        console.log("didUpdate - count: ", count);
    }, [count]);

    useEffect(() => {
        console.log("didUpdate - isOn: ", isOn);
    }, [isOn]);

    useEffect(() => {
        console.log("didUpdate - input: ", input);
    }, [input]);

    // 2초 뒤 refresh 완료되도록 처리 
    useEffect(() => {
        if ( isRefresh ) {
            setTimeout(()=>{
                setIsRefresh(false);
            }, 2000);
        }
    }, [isRefresh]);

    return (
        <View>
            <Text>You Clicked {count} times</Text>
            <Button title="Click Me" onPress={ ()=>setCount(count+1) } />

            <Text> style={{ marginVertical: 15 }}----------------------------</Text>
            <Switch value={isOn} onValueChange={ setIsOn} />

            <Text> style={{ marginVertical: 15 }}----------------------------</Text>

            <Text>input: { input }</Text>
            <TextInput 
                value={input}
                onChangeText={setInput}
                style={{ borderBottomWidth: 1, borderColor: 'black' }}
            />

            <Text> style={{ marginVertical: 15 }}----------------------------</Text>
            <Button title="새로고침!" onPress={() => {
                // call api 
                setIsRefresh(true);
            }} />
            { isRefresh && <ActivityIndicator /> }
        </View>
    )
}
