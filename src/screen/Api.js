import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const Api = () => {
  useEffect(() => {
    // getApi()
    // getapi2()
    // getapi3();
    postMethod2()
  }, []);

  //get method
  const getApi = async () => {
    const get = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    
    console.log(get);
  };

  const getapi2 = async () => {
    const get2 = await fetch('https://dummyjson.com/products/1');
    const data = await get2.json();
    console.log(data);
  };

  const getapi3 = async () => {
    const get3 = await fetch('https://dummy.restapiexample.com/api/v1/employee/1');
    const data2 = await get3.json();
    console.log(data2);
  };

  //post method
  const postMethod = async () => {
    const method1 = await fetch('https://reqres.in/api/users',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        name: 'Lawson Luke',
        email: 'email@yahoo.com',
        password: '123',
      }),
      
    })
    const data2 = await method1.json();
    console.log(data2);
  }


  const postMethod2 =async () => {
    const method2 = await fetch('https://reqres.in/api/users',{
      method : 'POST',
      headers: { Accept: 'application/json',
      'Content-Type': 'application/json',},
      body:JSON.stringify({
        name: 'Lawson Luke',
        email: 'email@yahoo.com',
        password: '123',
      }),
    })
    const data3 = await method2.json();
    console.log(data3);
  }

  return (
    <View>
      <Text>Api</Text>
    </View>
  );
};

export default Api;

const styles = StyleSheet.create({});
