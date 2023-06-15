import React, { Component } from "react";

export default class StateWithClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  
  render() {
    return ( 
      <View>
        <Text>You Clicked {this.state.count} times</Text>
        <Button 
          title="Click Me"
          onPress={()=>{ this.setState({ count: this.state.count + 1 })}}
        />
      </View>
    );
  }
}
