import React, {useState} from 'react';
import { View, Button, StyleSheet,TextInput } from 'react-native';

const AddNewTodos =({newTodo,setnewTodo,todoSave})=> {
    return(
        <View>
            <TextInput 
                style={styles.input} 
                placeholder='New todo...'
                onChangeText={(e)=>{setnewTodo(e)}}
                value={newTodo}
            />
            <Button color='coral' onPress={() => {todoSave()}} title='add todo' />
        </View>
    )
}

export default AddNewTodos;

const styles = StyleSheet.create({
    input: {
      marginBottom: 10,
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
  });