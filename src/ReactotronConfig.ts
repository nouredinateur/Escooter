import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  ?.configure() // controls connection & communication settings
  ?.use(reactotronRedux()) // Redux plugin
  ?.use(sagaPlugin({})) // Saga plugin
  ?.useReactNative() // add all built-in react native plugins
  ?.connect(); // let's connect!
// Give reactotron access th
console.tron = Reactotron;

export default Reactotron;
