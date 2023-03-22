import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import Navigation from './src/Navigation/Navigation';
import myStore from './src/redux/reducers/Store';
import { Provider } from 'react-redux';

const app = () => {
 return(
  <Provider store={myStore}>
  <Navigation />

  </Provider>
 )
};

const styles = StyleSheet.create({});

export default app;
