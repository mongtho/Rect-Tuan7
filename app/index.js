import { SafeAreaView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen3 from './Screen3';

const Stack = createStackNavigator();
export default function App() {
  return (
    // <SafeAreaView >

    //   <Screen2 />
    // </SafeAreaView>
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Screen1} />
        <Stack.Screen name="Trang Chủ" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


