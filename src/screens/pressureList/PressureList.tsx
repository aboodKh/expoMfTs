import React from 'react';
import {View, Text, StyleSheet, FlatList, Button} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import Pressure from "../pressure/Pressure";



const Stack= createStackNavigator();
export default function PressureList(){
    return (
           <Stack.Navigator>
               <Stack.Screen name="pressure list" component= {Home} options={{headerShown: false}} />
               <Stack.Screen name="pressure" component= {Pressure} />
           </Stack.Navigator>
    );
}

const styles= StyleSheet.create({ 
    item: {marginTop: 20, padding: 10}
})

function Home({navigation}: any){
    return (
        <View style={{flex: 1,  justifyContent: 'space-evenly', flexDirection: 'column'}} >
            <FlatList 
            data={[{ID: 1, reading: "60/120", date: "19/12/2020"},
                   { ID: 2, reading: "75/130", date: "20/12/2020"}]} 
            keyExtractor={(item) => item.ID.toString() }
            renderItem={RenderPressureCard} />
        </View>
    )


    function RenderPressureCard({item}: any){
        return( 
        <View>
          <Text style= {styles.item}> 
           reading: {item.reading}  date: {item.date}  
          </Text>
          <Button  title="details"  onPress={() => navigation.navigate('pressure', {ID: item.ID })} />
        </View>
        )
    }

}

