import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const Loginpage = () => {
   const route = useRoute()
   console.log('route1',route.params);
  return (
    <View>
      <Text>{route.params.username}</Text>
      <Text>{route.params.userpassword}</Text>
      <Text>{route.params.fullname}</Text>
    </View>
  )
}

export default Loginpage

const styles = StyleSheet.create({

})