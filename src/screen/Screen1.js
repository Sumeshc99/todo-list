import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Screen1 = () => {

   const navigation =  useNavigation()
  return (
    <View>
      <Text>Screen1</Text>
      <Button onPress={() => navigation.navigate('Home2')} title='button'/>
      <Button onPress={() => navigation.navigate('info')} title='infobutton'/> 
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({})