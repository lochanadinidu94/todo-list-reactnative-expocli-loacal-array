import React, {useState} from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItems({item,todoDelete, checkTodoID}){
    return(
       <TouchableOpacity onPress={()=>{checkTodoID(item.id)}}>
           <View style={styles.item}>
                <MaterialIcons name="delete" size={20} color="red"  onPress={()=>{todoDelete(item.id)}}/>
                <Text style={styles.itemText}> {item.name}</Text>
           </View>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

      item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 1,
        borderRadius: 10,
        flexDirection:'row'
      },
      itemText:{
          marginLeft: 20,
      },
})