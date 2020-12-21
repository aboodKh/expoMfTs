import React from 'react';
import {View, Text, StyleSheet} from "react-native";

const styles= StyleSheet.create({ 
    container:{ flex: 1, justifyContent: 'center', alignItems: 'center' } 
})
export default function Pressure({route}:any){
    return (
        <View style= {styles.container} >
            <Text> ID: {route.params.ID}</Text>
            <Text> reading:80/120 </Text>
            <Text>date:19/12/2020 </Text>
            <Text>sugar percentage: 60% </Text>
            <Text>heart rate: 70 BPM </Text>
        </View>
    );
}