import * as React from 'react';
import { View } from 'react-native';

type Props = {
  children?: React.ReactNode;
  style?: any;
};

function WhiteBox({ children, style }: Props) {
  return (
    <View
      style={{
        backgroundColor: '#ffffff40',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        borderRadius: 10,
        ...style,
      }}>
      {children}
    </View>
  );
}

export default WhiteBox;
