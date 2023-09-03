import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import * as React from 'react';
import MainScreen from '../screens/MainScreen';
import DetailScreen from '../screens/DetailScreen';
import AddUpdateScreen from '../screens/AddUpdateScreen';
import MonthlyScreen from '../screens/MonthlyScreen';
import {AccountBookHistory} from '../data/AccountBookHistory';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

type ScreenParams = {
  Add: undefined;
  Main: undefined;
  Update: {item: AccountBookHistory};
  Detail: {item: AccountBookHistory};
  MonthlyAverage: undefined;
};

const Stack = createNativeStackNavigator<ScreenParams>();

function RootNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, presentation: 'containedModal'}}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Add" component={AddUpdateScreen} />
      <Stack.Screen name="Update" component={AddUpdateScreen} />
      <Stack.Screen name="MonthlyAverage" component={MonthlyScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigation;

export const useRootNavigation = <RouteName extends keyof ScreenParams>() =>
  useNavigation<NativeStackNavigationProp<ScreenParams, RouteName>>();

export const useRootRoute = <RouteName extends keyof ScreenParams>() =>
  useRoute<RouteProp<ScreenParams, RouteName>>();
