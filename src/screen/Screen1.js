import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Screen1 = () => {

   const navigation =  useNavigation()
  return (
    <View style={{flex:1}}>
      <Text>Screen1</Text>
      <Button onPress={() => navigation.navigate('Home2')} title='to do list'/>
      <Button onPress={() => navigation.navigate('info')} title='infobutton'/> 
      <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('login') }>
        <Text >go to login page</Text>   
      </TouchableOpacity>

      <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('localstorage') }>
        <Text >go to login page</Text>   
      </TouchableOpacity>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
  login:{
    width: 120,
    height: 30,
    backgroundColor: 'blue',
    color:'white',
    margin:10,
    justifyContent:'center',
    alignItems:'center',
  }
})