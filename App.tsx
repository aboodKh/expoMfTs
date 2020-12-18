import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function App() {
  return (
  <View style={styles.container}>
      <Text>Open App.tsx to start working on your app!</Text>
      <TextInput placeholder="type something here"/>   
      <StatusBar style="auto" />
    <ScrollView>
      <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
    
      <Text style={{ fontSize: 96 }}>If you like</Text>
    
      <Text style={{ fontSize: 96 }}>Scrolling down</Text>
    </ScrollView>
    <FlatList data={[{number: 1},{number: 10}]} 
    renderItem={({item})=> <Text>{item.number}</Text>} / >
  <Button title= "press gently" onPress={()=> {Alert.alert("only work on mobile");  alert("hey my friend")} } />
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
});
