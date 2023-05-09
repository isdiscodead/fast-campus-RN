import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { MainScreen } from "../screens/MainScreen";
import { AddUpdateScreen } from "../screens/AddUpdateScreen";
import { DetailScreen } from "../screens/DetailScreen";

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, presentation: 'containedModal' }}>
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Add" component={AddUpdateScreen} />
            <Stack.Screen name="Update" component={AddUpdateScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
    )
}