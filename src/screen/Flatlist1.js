import {Button, FlatList, Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';

const flatlist1 = () => {
  const [modal1, setmodal1] = useState(false);

 const select =  useSelector(state => state)
   const userdata = select.LoginReducer

  const users = [
    {
      id: 1,
      name: userdata.name,
    },
    {
      id: 2,
      name: userdata.password,
    },
    {
      id: 3,
      name: userdata.fullname,
    },
    {
      id: 4,
      name: 'sdffsd',
    },
  ];

  const renderFlatList = item => {
    return (
      <Text style={{fontSize: 25}}>
        {item.id}: {item.name}
      </Text>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Modal transparent={true} visible={modal1} animationType='fade'>
        <View style={styles.centeredview}>
          <View style={styles.modalView}>
            <Text style={{fontSize: 30, marginBottom: 10}}>
              {' '}
              sdsds sdssd modal
            </Text>
            <Button title="close modal" onPress={() => setmodal1(false)}/>
          </View>
        </View>
      </Modal>
      <Text style={{fontSize: 50}}>Flatlist1</Text>
      <FlatList data={users} renderItem={({item}) => renderFlatList(item)} />
      <Button title="open modal" onPress={() => setmodal1(true)} />
    </View>
  );
};

export default flatlist1;

const styles = StyleSheet.create({
  centeredview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalView: {
    backgroundColor: 'white',
    padding: 40,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 30,
  },
});
