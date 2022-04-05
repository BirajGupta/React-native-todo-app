import React , {useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from "./components/header"
import TodoItem from "./components/todoItem"
import AddTodo from "./components/addTodo"
import Sandbox  from "./components/sandbox";

export default function App() {

  const [todos, setTodos] = useState(new Array(
    {text:"buy coffee", key:1},
    {text:"take Dog to walk", key:2},
    {text:"play with Dog", key:3},
  ))

  const pressHandler = (key) => {
      setTodos(prevState => {
        return prevState.filter(todo => todo.key !== key)
      })
  }

  const submitHandler = (val) => {
    console.log("hello")
    if(val.length > 3){
      let newTodos = [...todos]

      newTodos.push({text:val, key: Math.random().toString()})
      
      setTodos(newTodos)
    } else {
        Alert.alert("OOPS!", "Todos must be over 3 chars long", [
          {text:"Understood", onPress: () => console.log("alert closed")}
        ])
    }

   
  }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <StatusBar backgroundColor="coral"/>
        <Header/>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 25 : 0
  },

  content:{
    flex:1,
    padding:40,
  },

  list:{
    flex:1,
    marginTop:20
  }
});
