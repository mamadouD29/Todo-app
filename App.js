import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Header from './components/header';

export default function App() {
  const [todos, setTodos] = useState([
    {text: "Brush your teeth", key:1 },
    {text: "Pray", key:2 },
    {text: "Eat your breakfast", key:3 },
    {text: "Go to Gym", key: 4},
    {text: "Practice React Native", key:5 },
    {text: "Rest", key: 6}
  ])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* header */}
      <Header />      
      <View style={styles.content}>
        {/* form */}
        
        <View style={styles.list}>
          <FlatList data={todos} renderItem={({item}) => (
            <Text>{item.text}</Text>
          )}/>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal: 30,
    // paddingTop: 30,
  },
  content: {
    padding: 40,

  },
  list: {
    marginTop: 20,
  }
});
