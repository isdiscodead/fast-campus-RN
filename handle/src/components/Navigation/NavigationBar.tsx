import React, {ReactElement} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, useWindowDimensions} from 'react-native';
import {Spacer} from '../Spacer';
import {IconName} from '../Icons';

import {HeaderTitle} from '../Header/HeaderTitle';
import {HeaderIcon} from '../Header/HeaderIcon';
import {HeaderGroup} from '../Header/HeaderGroup';

type CompoundComposition = {
  Title: React.FC<{title: string}>;
  Icon: React.FC<{onPress: () => void; iconName: IconName}>;
  Group: React.FC<{children: ReactElement[]}>;
};

export const NavigationBar: React.FC<{
  children: ReactElement | ReactElement[];
}> &
  CompoundComposition = props => {
  const insets = useSafeAreaInsets();
  const {width} = useWindowDimensions();

  return (
    <View style={{paddingTop: insets.top}}>
      <View
        style={{
          width: width,
          flexDirection: 'row',
          height: 80,
          backgroundColor: '#ffffff40',
          borderColor: '#fff',
          borderWidth: 1,
          alignItems: 'center',
          padding: 20,
          borderRadius: 100,
        }}>
        <Spacer horizontal={true} space={12} />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {props.children}
        </View>
        <Spacer horizontal={true} space={12} />
      </View>
    </View>
  );
};

NavigationBar.Title = HeaderTitle;
NavigationBar.Icon = HeaderIcon;
NavigationBar.Group = HeaderGroup;
