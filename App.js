import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import {Alert, StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import AddTodo from './components/addTodo';
import Header from './components/header';
import TodoItem from './components/todoItem';


export default function App() {
  const [todos, setTodos] = useState([
    {text: "Brush your teeth", key:1 },
    {text: "Pray", key:2 },
    {text: "Eat your breakfast", key:3 },
    {text: "Go to Gym", key: 4},
    {text: "Practice React Native", key:5 },
    {text: "Rest", key: 6}
  ])

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos)=>{
        return [{text: text, key: Math.random() },...prevTodos ]
      })
    } else {
      Alert.alert("Hey", "Todos must be more than 3 chars long",
      [{text: "Understood" }])
    }
  }
  const pressHandler = (key)=>{
    setTodos((prevTodos)=>{
    return prevTodos.filter(todo=> todo.key != key)
  })
  }

  return (


    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      // console.warn("dismissed")
    }}>
    <View style={styles.container}>
      {/* <StatusBar style="auto"/> */}
      {/* header */}
      <Header />      
      <View style={styles.content}>
        {/* form */}
        <AddTodo submitHandler={submitHandler}/>
        
        <View style={styles.list}>
          <FlatList data={todos} renderItem={({item}) => (
            <TodoItem item={item} pressHandler = {pressHandler}/>
          )}/>
        </View>

      </View>

    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal: 30,
    paddingTop: Platform.OS === "android" ? 45 : 0,

  },
  content: {
    padding: 40,
    flex: 1,

  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
