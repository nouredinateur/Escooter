import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { QueryClient, QueryClientProvider, focusManager } from 'react-query';
import Map from './src/screens/Map';
import Cities from './src/screens/Cities';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Map' defaultScreenOptions={{
          headerShown: false,
        }}>
          <Tab.Screen name="Map" options={{ headerShown: false }} component={Map} />
          <Tab.Screen name="Cities" options={{ headerShown: false }} component={Cities} />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
export default App;
