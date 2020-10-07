import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ActivityIndicator, StyleSheet, View } from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import { authenticatedResult } from '../../redux/selectors/index';

import { getAuthenticated } from '../../redux/actions/authentication';

import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp';
import HeaderHome from '../HeaderHome';
import BottomTabNavigator from "../BottomTabNavigator";
import AsyncStorage from "@react-native-community/async-storage";

const Stack = createStackNavigator();

const LoginStackNavigator = () => {

  const dispatch = useDispatch();

  const resultAuthenticated = useSelector((state) => authenticatedResult(state));

  const [isLoading, setIsLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  const isAuthenticated = async () => {
    let token = await AsyncStorage.getItem("token");

    if (token) {
      dispatch(getAuthenticated());
    }
  }

  useEffect(() => {
   isAuthenticated();
  }, [])

  useEffect(() =>{
    
    if(resultAuthenticated){
        debugger
        setAuthenticated(true);
    }
  },[resultAuthenticated])

  useEffect(() =>{
    setIsLoading(false);
  },[authenticated])
  return (

    isLoading ? (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />

      </View>
    ) : (
        <Stack.Navigator size="large" >
          {authenticated ?
            <>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen
                name="Home"
                component={BottomTabNavigator}
                options={{
                  header: HeaderHome
                }}
              />
            </> :
            <>
              <Stack.Screen
                name="Home"
                component={BottomTabNavigator}
                options={{
                  header: HeaderHome
                }}
              />
            </>
          }
        </Stack.Navigator>

      )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
})

export default LoginStackNavigator;