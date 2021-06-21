import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import Homepage from "../new-project/src/Homepage";
import SignIn from "./src/SignIn";
import SignUp from "./src/SignUp";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
    <Tab.Navigator tabBarOptions ={{
      style:{ backgroundColor: 'black'},
      tabStyle:{justifyContent: 'center'},
      labelStyle: {fontSize: 20},
      activeTintColor: '#198c89'
    }}>
      <Tab.Screen
          name="Home"
          component={Homepage}
          options={{title: 'My Home'}}/>
      <Tab.Screen
          name="Sign In"
          component={SignIn}
          options={{title: 'Sign In'}}/>
      <Tab.Screen
          name="Sign Up"
          component={SignUp}
          options={{title: 'Sign Up'}}/>
    </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
