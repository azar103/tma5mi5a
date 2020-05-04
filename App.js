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
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Navigation from './Navigation/Navigation';
import store from './Store/configureStore'
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const App: () => React$Node = () => {
  let persistor = persistStore(store)
  return (
   <Provider store={store}>
     <PersistGate persistor={persistor}>
      <Navigation  />
     </PersistGate> 
    </Provider>   
  );
};


export default App;
