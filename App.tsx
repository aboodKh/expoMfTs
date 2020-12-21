import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./src/screens/home/Home";
import About from "./src/screens/about/About"
import PressureList from "./src/screens/pressureList/PressureList"

const Tab= createBottomTabNavigator();
export default function App() {
  return(
    <NavigationContainer>
       <Tab.Navigator>
         <Tab.Screen name="home" component={Home} />     
         <Tab.Screen name="About" component={About} />
         <Tab.Screen name="readings" component={PressureList} />
       </Tab.Navigator>
    </NavigationContainer>
  )
}


