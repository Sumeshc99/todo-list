import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ApicallusingExios = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getAPI();
    
  }, []);

  const baseURL = 'https://jsonplaceholder.typicode.com';

  const getAPI = () => {
    axios({
      method: 'GET',
      url: `${baseURL}/posts`,
    })
      .then(res => setdata(res.data))
      .catch(err => console.log(err));
  };
  
  const getAPI2 = () => {
    axios({
      method: 'GET',
      url: `${baseURL}/posts`,
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  const postAPI = () => {
    axios({
        method: 'POST',
        url: `${baseURL}/posts`,
        body: JSON.stringify({
            id: 101,
            title: 'new title',
            body: 'aaaaaaaaaaaabbbbbbbbbbbbb'
        })
    }).then(res => console.log(res)).catch(err => console.log(err))
  }

  return (
    <View>
      <Text>ApicallusingExios</Text>
      <FlatList
        data={data}
        ListEmptyComponent={() => <Text>no data</Text>}
        renderItem={({item}) => (
          <View>
            <Text> id: {item.id}</Text>
            <Text numberOfLines={1}> title: {item.title}</Text>
            <Text numberOfLines={1}> body: {item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ApicallusingExios;

const styles = StyleSheet.create({});
