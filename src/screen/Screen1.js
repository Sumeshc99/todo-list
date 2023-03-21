import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  PermissionsAndroid,
  Alert
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Screen1 = () => {
  useEffect(() => {
    permission();
  }, []);

  const navigation = useNavigation();

  const permission = () => {
    try {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
    } catch (error) {
      Alert.alert(error)
    }
  };

  return (
    <View style={{flex: 1}}>
      <Text>Screen1</Text>
      <Button onPress={() => navigation.navigate('Home2')} title="to do list" />
      <Button onPress={() => navigation.navigate('info')} title="infobutton" />
      <TouchableOpacity
        style={styles.login}
        onPress={() => navigation.navigate('login')}>
        <Text>go to login page</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.login}
        onPress={() => navigation.navigate('localstorage')}>
        <Text>go to login page</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.login}
        onPress={() => navigation.navigate('api')}>
        <Text>go to Api page</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.login}
        onPress={() => navigation.navigate('exios1')}>
        <Text>go to Api page</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.login}
        onPress={() => navigation.navigate('flatlist')}>
        <Text>flatlist</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  login: {
    width: 120,
    height: 30,
    backgroundColor: 'blue',
    color: 'white',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
