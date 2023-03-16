import { View, Text } from 'react-native'
import React from 'react'

export default function Task2() {

  const data = [
    'first',
    'second',
    'third',
    'forth',
    'fifth'
  ]

  showMap = () => {
    const appendValue = data.map((item) => item + 'sca')
    return appendValue.map((item, index) => 
      <Text key={index} >{item}</Text>
    )
  }

  showFilter = () => data.filter(item => item == 'fifth');

  return (
    <View>
      {showMap()}
      <Text style={{color:'red'}}>{showFilter()}</Text>
    </View>
  )
}