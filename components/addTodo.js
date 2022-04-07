import React, {useState} from "react"
import { StyleSheet, TextInput, View, Button } from 'react-native';

const AddTodo = ({submitHandler}) => {

    const [todo, setTodo] = useState("")
    
    const changeHandler = (val) =>{
        setTodo(val)
    }
    console.log("idhr bhi")
    return (
        
        <View>
            
            <TextInput
                style={styles.input}
                placeholder="new todo..."
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(todo)} title="add todo" color="coral"/>
        </View>
    )

}

const styles = StyleSheet.create({
    input:{
        marginBottom : 10,
        paddingHorizontal : 8,
        paddingVertical : 6,
        borderBottomWidth: 1,
        borderBottomColor : '#ddd'
    }
})

export default AddTodo

