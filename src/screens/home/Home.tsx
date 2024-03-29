import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',  
      justifyContent: 'center', 
    },
  });
  
   interface Item{
    number:number 
   }
   let data:Item[]= [{number: 1},{number: 10}];
   

  export default function Home(){
    return (
        <View style={styles.container}>
            <Text>Open App.tsx to start working on your app!</Text>
            <TextInput placeholder="type something here"/>   
            {/* <StatusBar style="auto" /> */}
          <ScrollView>
            <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
          
            <Text style={{ fontSize: 96 }}>If you like</Text>
          
            <Text style={{ fontSize: 96 }}>Scrolling down</Text>
          </ScrollView>
          <FlatList  keyExtractor={(item)=>item.number.toString()} data={data} 
          renderItem={({item})=> <Text>{item.number}</Text>} / >
          <Button title= "press gently"
          onPress={()=> {Alert.alert("only work on mobile");  
          alert("hey my friend")} } />
        </View>
        );
  }