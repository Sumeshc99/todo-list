import { StyleSheet, Text, View,TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Navigation from '../Navigation/Navigation'


const LoginScreen = () => {
    const navigation =  useNavigation()

    const [name, setname] = useState('')
    const [password, setpassword] = useState('')
    const [fullname,setfullname] = useState('')
    console.log('name',name);
  return (
    <View style={{backgroundColor:'white',flex:1}}>
      <Text style={styles.title}>loginScreen</Text>
      <TextInput 
      placeholder='username' 
      placeholderTextColor={"blue"}
      style={styles.username}
      value={name}
      onChangeText={(text) => setname(text)}
      />

      <TextInput
      placeholder='password'
      placeholderTextColor={'blue'}
      style={styles.password}
      value={password}
      secureTextEntry={true}
      onChangeText={(text) => setpassword(text)}
      />

      <TextInput
        placeholder='full name'
        placeholderTextColor={'blue'}
        style={styles.fullname}
        value={fullname}
        onChangeText={(text) => setfullname(text)}
      />

      <Button title='sign in' onPress={() => navigation.navigate('loginpage',{
        username: name,
        userpassword: password,
        fullname:fullname,
      })} />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    title:{
        fontSize:30,
        margin:20,
        color:'blue',
    },

    username:{
        borderWidth:1,
        marginTop:10,
        marginHorizontal:20,
        paddingLeft:20,
    },

    password:{
        borderWidth:1,
        marginTop:10,
        marginHorizontal:20,
        paddingLeft:20,
    },

    fullname:{
        borderWidth:1,
        marginTop:10,
        marginHorizontal:20,
        paddingLeft:20,
    }
})