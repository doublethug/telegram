import { StatusBar } from 'expo-status-bar';
import {Appearance} from 'react-native';


import { StyleSheet, Text, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AuthScreen from "./src/pages/Auth/Auth";
import ListScreen from "./src/pages/List";
import ProfileScreen from "./src/pages/Profile";
import ConversationScreen from "./src/pages/Conversation";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Auth" component={AuthScreen} />
        <Drawer.Screen name="List" component={ListScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Conversation" component={ConversationScreen} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
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
