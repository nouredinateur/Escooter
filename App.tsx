import React from 'react';
import {

  StyleSheet,
  View,
} from 'react-native';

import Map from './src/screens/Map';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import configureStore from './src/configureStore';

export type IAppProps = {};

const initialState = {};
const store = configureStore(initialState);

const App = () => {
  return (
    <Provider store={store} >
      <View style={styles.container}>
        <Map />
      </View>
    </Provider>
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
