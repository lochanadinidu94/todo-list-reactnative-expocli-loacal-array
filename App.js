import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView , FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FirstLession } from './pages/FirstLession';
import Headder from './pages/Headder';

import TodoItems from './pages/TodoItems';
import AddNewTodos from './pages/AddNewTodos';
export default function App() {

  const [todo, setTodo] = useState([
    {name: 'coffe make', id: 1},
    {name: 'tea naker', id: 2},
    {name: 'make excersises', id: 3},
    {name: 'water prep', id: 4},
    {name: 'laptop repair', id: 5},
    {name: 'print paper', id: 6},
    {name: 'just in compile', id: 7},
    ])

  const [newTodo, setnewTodo] = useState('')

  const todoDelete = (id)=>{
      setTodo(todo.filter((item)=>item.id !== id));
      alert(`Successfully Removed todo id is: ${id}`)
  }

  const todoSave = ()=>{
   if(newTodo.length>3){
    var newArray = [{name: newTodo, id: (todo.length + 1)}, ...todo]
    setTodo(newArray)
    setnewTodo('')
   }else{
     alert("Text must be alteast 3 letters!")
   }
  }

  const checkTodoID = (id)=>{
    alert(`Todo id is: ${id}`)
  }

  return(
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        {/* headder */}
        <Headder/>
        <View style={styles.content}> 
          {/* to form */}
          <AddNewTodos newTodo={newTodo} setnewTodo={setnewTodo} todoSave={todoSave}/>
          {/* to List */}
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem = {({item})=>{
                return <TodoItems item={item} todoDelete={todoDelete} checkTodoID={checkTodoID}/>
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40
  },
  list:{

  }

});
