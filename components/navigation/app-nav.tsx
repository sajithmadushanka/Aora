import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '@/app/(tabs)/home';
import Profile from '@/app/profile';
import Create from '@/app/(tabs)/create';
import Bookmark from '@/app/(tabs)/bookmark';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer >
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Profile' component={Profile}/>
            <Stack.Screen name='Create' component={Create}/>
            <Stack.Screen name='Bookmark' component={Bookmark} />
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default AppNavigation