import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



const Screen2 = () => {
  const [task, setTask] = useState();
  const [taskitems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskitems, task]);
    setTask(null);
  };

  const completeTask = index => {
    let itemsCopy = [...taskitems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>

      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>todays tasks</Text>

        <View style={styles.item}>
          {taskitems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask()}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={'write a task'}
          value={task}
          onChangeText={task => setTask(task)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addtext}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      
    </View>
    
  );
}

export default Screen2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  taskWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    // backgroundColor:'lightblue',
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 20,
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    borderWidth: 1,
    alignItems: 'center',
    marginRight: 20,
  },
  addtext: {
    fontWeight: 'bold',
    fontSize: 30,
  },
})