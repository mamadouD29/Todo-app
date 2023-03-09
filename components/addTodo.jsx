import React, { useState } from 'react'
import {StyleSheet, Text, Button, TextInput, View} from 'react-native';

// const initailText = 

export default function AddTodo({submitHandler}){

    const [text, setText] = useState("");
    const changeHamdler = (val)=>{
        setText(val)
    }

    return (
        <View>
            <TextInput style={styles.input} placeholder='New todo ...' onChangeText={changeHamdler} />

            <Button title='add todo' onPress={()=>submitHandler(text)} color={"crimson"}/>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        borderBottomColor: "grey",

    },

})