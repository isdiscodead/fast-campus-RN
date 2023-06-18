import React, { useState } from "react";
import { TextInput, View } from "react-native";


const InputBox = (props) => {
    <View style={{ flexDirection: "row" }}>
        <TextInput value={props.value}
            style={{ borderBottomWidth: 1, width: 200 }}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText} 
        />
        <Button 
            title="초기화"
            onPress={ props.onReset }
        />
    </View>
}


// custom hooks은 무조건 이름이 use로 시작되어야 함
const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const resetValue = () => setValue(initialValue);
    return {
        value, setValue, resetValue,
    }
}


const CustomHook = () => {

    const { value: name, setValue: setName, resetValue: resetName }  = useInput("");
    const { value: age, setValue: setAge, resetValue: resetAge }  = useInput("");
    const { value: city, setValue: setCity, resetValue: resetCity }  = useInput("");

    return (
        <View>
            <InputBox 
                value={name}
                onChangeText={setName} // 아래 코드와 동일함 ( 구조가 똑같음 )
                // onChangeText={(v) => setName(v) }
                placeholder="이름을 입력해주세요."
                onReset={ resetName }
            />
           
            <View style={{ flexDirection: "row" }}>
                <TextInput value={age}
                    style={{ borderBottomWidth: 1, width: 200 }}
                    placeholder="나이를 입력해주세요."
                    onChangeText={setAge} 
                />
                 <Button 
                    title="초기화"
                    onPress={ resetAge }
                />
            </View>

            <View style={{ flexDirection: "row" }}>
                <TextInput value={city}
                    style={{ borderBottomWidth: 1, width: 200 }}
                    placeholder="사는 곳을 입력해주세요."
                    onChangeText={setCity}
                />
                 <Button 
                    title="초기화"
                    onPress={ resetCity }
                />
            </View>
        </View>
    );
}

export default CustomHook;