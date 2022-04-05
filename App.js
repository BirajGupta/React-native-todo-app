import React , {useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from "./components/header"
import TodoItem from "./components/todoItem"
import AddTodo from "./components/addTodo"

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
    let newTodos = [...todos]

    newTodos.push({text:val, key: Math.random().toString()})
    
    setTodos(newTodos)
  }

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 25 : 0
  },

  content:{
    padding:40,
  },

  list:{
    marginTop:20
  }
});
