import React from 'react'
import { useState } from 'react';

function StateWithFunctionalComponent() {

  const [count, setCount] = useState(0);

  return ( 
    <View>
      <Text>You Clicked {this.state.count} times</Text>
      <Button 
        title="Click Me"
        onPress={()=>{ setCount(count + 1) }}
      />
    </View>
  );
}

export default StateWithFunctionalComponent