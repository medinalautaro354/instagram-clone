/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';


import store from './src/redux/store';
import LoginStackNavigator from './src/components/LoginStackNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <LoginStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default App;
