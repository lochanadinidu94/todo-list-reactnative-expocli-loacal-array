
import react, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView , FlatList, TouchableOpacity } from 'react-native';


export const FirstLession = () => {
return 
            const [name, setName] = useState()
            const [age, setAge] = useState(1)
        
            const [people, setPeople] = useState([
            {name: 'Dinidu', id: 1},
            {name: 'Oshan', id: 2},
            {name: 'Ramitha', id: 3},
            {name: 'Lochana', id: 4},
            {name: 'Ravi', id: 5},
            {name: 'Sameeta', id: 6},
            {name: 'Don', id: 7},
            ])
        
            const upNumber = ()=>{
            alert(returnText())
            }
        
            const returnText = ()=>{
            if (name == '' || name == null){
                return 'Not Valid Datas'
            }else{
                return `${name} , age is ${age}`
            }
            
            }
        
            const touchableComportabt = (id)=>{
            setPeople(people.filter((item)=>item.id !== id));
            alert(`Successfully Removed ${id}`)
            }
        
        
            return (
            <View style={styles.container}>
                
            <View>
                <TextInput style={styles.input} placeholder='Enter Name:' onChangeText={(e)=>{
                setName(e)
                }}/>
                <TextInput style={styles.input} keyboardType='number-pad' placeholder='Enter Age:' onChangeText={(e)=>{
                setAge(e)
                }}/>
                <Text>{returnText()}</Text>
            </View>
        
            <View style={styles.buttoneContainer} >
                <Button title='up-number' onPress={upNumber } />
            </View>
        
        {/* Peoples render use JS Map */}
            {/* <ScrollView>
                { people.map( (p)=>{
                return(
                    <View key={p.key}>
                        <Text style={styles.items}>{p.name}</Text>
                    </View>
                )
                })}
            </ScrollView> */}
        
            {/* Array eke KEY property ekak thiyanawanm aulak ne mkada FlatList ekata Key property ekak required */}
            {/* <FlatList
                data={people}
                renderItem={({item})=>{
                return <Text style={styles.items}>{item.name}</Text>
                }}
            /> */}
        
        
            {/* Array eke KEY property ekak netnam val assing karanna one */}
            <FlatList
                numColumns={2}
                keyExtractor={(item )=>item.id}
                data={people}
                renderItem={({item})=>{
                return (
                    <TouchableOpacity onPress={()=>{touchableComportabt(item.id)}}>
                    <Text style={styles.items}>{item.name}</Text>
                    </TouchableOpacity>
                )
                }}
            />
        
        
        
        
            </View>
            );
        
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  
    boldTex:{
      fontWeight: 'bold'
    },
  
    buttoneContainer:{
      backgroundColor:'#f856',
      padding:20,
      marginTop: 20
    },
  
    input:{
      borderWidth:1,
      borderColor:'#777',
      padding:8,
      margin:10,
      width:200,
    },
  
    items:{
      marginTop:24,
      padding: 30,
      backgroundColor: 'blue',
      fontSize: 24,
      marginHorizontal:10,
      marginTop:24
    }
  
  });