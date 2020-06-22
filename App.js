import React from 'react';
import {  View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';



import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import ProfileScreen from './screens/ProfileScreen';
import { DrawerContent }from './screens/DrawerContent';
import ChatScreen from './screens/ChatScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();




function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}   
       options={{
  
          headerShown: false
        }} />
      <Stack.Screen name="Contact" component={ContactScreen}
             options={{
  
              headerShown: false
            }} />

      <Stack.Screen name="Profile" component={ProfileScreen}
               options={{
  
              headerShown: false
            }} /> 
       <Stack.Screen name="Chat" component={ChatScreen}
               options={{
  
              headerShown: false
            }} />                  
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <View style={{flex:1}}>
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent { ... props}/>} >
        <Drawer.Screen name="Home" component={MyStack} />
      </Drawer.Navigator>
    </NavigationContainer>
    </View>
  );
}