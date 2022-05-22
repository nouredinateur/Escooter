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
import { QueryClient, QueryClientProvider, focusManager } from 'react-query';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MapView from 'react-native-maps';
import Map from './src/screens/Map';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <Map />
      </View>
    </QueryClientProvider>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default App;
