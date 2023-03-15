import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Task = props => {
  return (
    <View style={styles.items}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circuler}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: 'red',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 25,
  },
  itemText: {
    maxWidth: '80%',
  },
  circuler: {
    width: 12,
    height: 12,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 6,
  },
});

export default Task;
