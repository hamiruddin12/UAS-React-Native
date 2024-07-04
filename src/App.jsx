import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Beranda from './screens/Beranda'
import Kontak from './screens/Kontak'
import Profil from './screens/Profil'
const Stack = createStackNavigator()

const App = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name='Beranda' component={Beranda} />
        <Stack.Screen name='Kontak' component={Kontak} />
        <Stack.Screen name='Profil' component={Profil} />
      </Stack.Navigator>
  )
}

export default App

const styles = StyleSheet.create({})