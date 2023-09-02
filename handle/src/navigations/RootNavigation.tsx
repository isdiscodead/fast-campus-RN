import * as React from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { RouteProp, useNavigation } from '@react-navigation/native';

import { MainScreen } from '../screens/MainScreen';
import { AddUpdateScreen } from '../screens/AddUpdateScreen';

type ScreenParams = {
  Main: undefined;
  Update: undefined;
};

const Stack = createNativeStackNavigator<ScreenParams>();

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: 'containedModal' }}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Update" component={AddUpdateScreen} />
      {/* <Stack.Screen name="Detail" component={DetailScreen} /> */}
    </Stack.Navigator>
  );
};

export const useRootNavigation = <RouteName extends keyof ScreenParams>() =>
  useNavigation<NativeStackNavigationProp<ScreenParams, RouteName>>();

export const useRootRoute = <RouteName extends keyof ScreenParams>() =>
  useNavigation<RouteProp<ScreenParams, RouteName>>();
