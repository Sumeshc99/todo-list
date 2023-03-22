import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch ,useSelector} from 'react-redux';
import {LoginDetail} from '../redux/reducers/Reducers'

const LoginScreen = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch()
  const select = useSelector(state => state)

  console.log(' REDUX resp',select);
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');
  const [fullname, setfullname] = useState('');



  const storedetails = async () => {

    dispatch(
      LoginDetail({
        name: name,
        password: password,
        fullname: fullname,
      })
    )

    const obj = {
      name: name,
      password: password,
      fullname: fullname,
    };

    try {
      const jsonvalue = JSON.stringify(obj);
      await AsyncStorage.setItem('info', jsonvalue);
    } catch (error) {}
  };

  const getdetails = async () => {
    const getjsonvalue = await AsyncStorage.getItem('info');
    getjsonvalue = JSON.parse(getjsonvalue);
    console.log(getjsonvalue.fullname);
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Text style={styles.title}>loginScreen</Text>

      <TextInput
        placeholder="full name"
        placeholderTextColor={'blue'}
        style={styles.row}
        value={fullname}
        onChangeText={text => setfullname(text)}
      />

      <TextInput
        placeholder="username"
        placeholderTextColor={'blue'}
        style={styles.row}
        value={name}
        onChangeText={text => setname(text)}
      />

      <TextInput
        placeholder="password"
        placeholderTextColor={'blue'}
        style={styles.row}
        value={password}
        secureTextEntry={true}
        onChangeText={text => setpassword(text)}
      />

      <TouchableOpacity style={styles.btnstyle} onPress={() => storedetails()}>
        <Text style={styles.signintxt}>sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnstyle} onPress={() => getdetails()}>
        <Text style={styles.signintxt}>get details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    margin: 20,
    color: 'blue',
  },

  row: {
    borderWidth: 1,
    marginTop: 10,
    marginHorizontal: 20,
    paddingLeft: 20,
    borderRadius: 20,
  },

  btnstyle: {
    margin: 20,
    marginTop: 30,
    width: 100,
    height: 50,
    backgroundColor: 'blue',
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 5,
  },

  signintxt: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
