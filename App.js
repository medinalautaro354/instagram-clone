/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import ErrorBoundary from './src/components/ErrorBoundary/index';

import store from './src/redux/store';
import LoginStackNavigator from './src/components/LoginStackNavigator';

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <NavigationContainer>
        <StatusBar hidden={true} />
            <LoginStackNavigator />
        </NavigationContainer>
      </Provider>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default App;
