import React from "react"
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const TodoItem = ({item, pressHandler}) => (

    <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <View  style={styles.item}>
                <MaterialIcons name="delete-forever" size={18} color="#333" />
                <Text style={styles.itemText}>{item.text}</Text>
        </View>
    </TouchableOpacity>

)

const styles = StyleSheet.create({
    item :{
        flexDirection:"row",
        padding:16,
        marginTop:16,
        borderColor:"#bbb",
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    },

    itemText:{
        marginLeft:5
    }
})

export default TodoItem