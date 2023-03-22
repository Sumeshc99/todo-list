import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector,useDispatch } from 'react-redux';
import { stringvalue } from '../redux/reducers/Reducer2';

const Local_storage = () => {

  const dispatch = useDispatch()

  const [input, setinput] = useState('');
  const [Storage, setStorage] = useState('');

  const select2 = useSelector(state => state)
  console.log("select val 2",select2);

  const addItem = async () => {
    dispatch(
      stringvalue({
        string : input
      })
    )

    try {
      await AsyncStorage.setItem('itemlist', input);
      setinput('')
    } catch (err) {
      console.log(err);
    }
  };

  const getValue = async () => {
    try {
      const data = await AsyncStorage.getItem('itemlist');
      setStorage(data);
    } catch (error) {}
  };

  const removeValue = async () => {
    await AsyncStorage.removeItem('itemlist');
    getValue();
  };

  return (
    <View style={{flex: 1}}>
      <TextInput
        style={styles.input}
        placeholder="enter string"
        value={input}
        onChangeText={value => setinput(value)}
      />

      <TouchableOpacity style={styles.btnstyle} onPress={() => addItem()}>
        <Text style={styles.btntxt}> insert value</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnstyle} onPress={() => getValue()}>
        <Text style={styles.btntxt}> get value</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnstyle} onPress={() => removeValue()}>
        <Text style={styles.btntxt}> remove value</Text>
      </TouchableOpacity>

      <Text style={styles.storedata}>{Storage}</Text>
    </View>
  );
};

export default Local_storage;

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 2,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    paddingLeft: 10,
  },

  btnstyle: {
    margin: 12,
    width: 100,
    height: 30,
    backgroundColor: 'blue',
    borderRadius: 20,
  },

  btntxt: {
    fontSize: 15,
    color: 'white',
    alignItems: 'center',
    padding: 4,
  },
  storedata: {
    fontSize: 30,
    color: 'blue',
  },
});
