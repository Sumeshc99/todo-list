import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const flexbox11 = () => {
  return (
    <View>
      <Text>flexbox11</Text>
      <View style={styles.parentview}>
        <Text style={[styles.child,styles.box1]}> Box 1 </Text>
        <Text style={[styles.child,styles.box2]}> Box 2 </Text>
        <Text style={[styles.child,styles.box3]}> Box 3 </Text>
        <Text style={[styles.child,styles.box4]}> Box 4 </Text>
        <Text style={[styles.child,styles.box5]}> Box 5 </Text>
      </View>
    </View>
  );
};

export default flexbox11;

const styles = StyleSheet.create({
    parentview:{
        width: '95%',
        marginTop:50,
        marginHorizontal:10,
        borderWidth:2,
        backgroundColor:'aliceblue'
    },

    child:{
        height:60,
        fontSize:20,
        borderWidth:1,
    }

});
