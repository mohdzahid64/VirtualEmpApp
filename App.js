/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import home from './src/Home'
import setting from './src/Setting'



const Drawer = createDrawerNavigator();

const App = ()  => (
  
  
<NavigationContainer>
<Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={home} options={{ headerShown: true }} />
        <Drawer.Screen name="Settings" component={setting} options={{ headerShown: true }} />
        
      </Drawer.Navigator>
 </NavigationContainer>
);

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
