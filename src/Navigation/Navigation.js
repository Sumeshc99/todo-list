import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from '../screen/Screen1';
import Screen2 from '../screen/Screen2';
import Screen3 from '../screen/Screen3';
import LoginScreen from '../screen/LoginScreen';
import Loginpage from '../screen/Loginpage';
import Local_storage from '../screen/Local_storage';
import Api from '../screen/Api';
import ApicallusingExios from '../screen/ApicallusingExios';
import Flatlist1 from '../screen/Flatlist1';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Screen1}/>
        <Stack.Screen name='Home2' component={Screen2}/>
        <Stack.Screen name='info' component={Screen3}/>
        <Stack.Screen name='login' component={LoginScreen}/>
        <Stack.Screen name='loginpage' component={Loginpage}/>
        <Stack.Screen name='localstorage' component={Local_storage} />
        <Stack.Screen name='api' component={Api}/>
        <Stack.Screen name= 'exios1' component={ApicallusingExios}/>
        <Stack.Screen name= 'flatlist' component={Flatlist1}/>

    </Stack.Navigator>
  </NavigationContainer>;
};

export default Navigation;

const styles = StyleSheet.create({});
