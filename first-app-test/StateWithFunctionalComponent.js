import React from 'react'
import { useState, View, Text, Button } from 'react';

function StateWithFunctionalComponent() {

  const [count, setCount] = useState(0);

  const arr = [1, 2, 3];
  const [first, second, third] = arr;

  return ( 
    <View>
      <Text>You Clicked {count} times</Text>
      <Button 
        title="Click Me"
        onPress={()=>{ setCount(count + 1) }}
      />
    </View>
  );
}

export default StateWithFunctionalComponent