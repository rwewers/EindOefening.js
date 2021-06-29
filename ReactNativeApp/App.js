import 'react-native-gesture-handler'
import React from 'react'
import { AuthProvider } from './hooks/Authentication'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './pages/Home'
import SignIn from "./pages/SignIn";
import MenuStyle from "./components/MenuStyle.js";
import MyProfile from "./pages/MyProfile";
import AllDemos from "./pages/AllDemos";


export default function App() {

  const Stack = createStackNavigator()

  return (
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>

            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Menu" component={MenuStyle} />
            <Stack.Screen name="MyProfile" component={MyProfile} />
            <Stack.Screen name="AllDemos" component={AllDemos} />

          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
  )
}