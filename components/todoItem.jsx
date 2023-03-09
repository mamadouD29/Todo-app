import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import React from 'react'
import {MaterialIcons} from "@expo/vector-icons"


export default function TodoItem ({item, pressHandler}){
    return (
        <TouchableOpacity onPress={()=>pressHandler(item.key)} >
            <View style={styles.item} >
                <MaterialIcons name="delete" size={20} color={"grey"}  />
                <Text style= {styles}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    item: {
        padding: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        marginTop:2,
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        
    },

})