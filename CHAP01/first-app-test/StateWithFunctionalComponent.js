import React from 'react'
import { useState, View, Text, Button } from 'react';
import { Switch, TextInput } from 'react-native';

function StateWithFunctionalComponent() {

  const [count, setCount] = useState(0); 
  const [isOn, setIsOn] = useState(false);
  const [name, setName] = useState("");

  return ( 
    <View>
      <Text>You Clicked {count} times</Text>
      <Button 
        title="Click Me"
        onPress={()=>{ setCount(count + 1) }}
      />

      <Text>----------------</Text>
      <Switch
        value={isOn}
        onValueChange={v => {
          console.log('v', v);
          setIsOn(v);
        }}
      />

      <Text>----------------</Text>
      <TextInput 
        value={name}
        onChangeText={v => {
          console.log('v', v);
          setName(v);
        }}
      />
    </View>
  );
}

export default StateWithFunctionalComponent