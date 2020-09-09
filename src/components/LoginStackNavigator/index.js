import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp';
import HeaderHome from '../HeaderHome';
import BottomTabNavigator from "../BottomTabNavigator";

const Stack = createStackNavigator();

const LoginStackNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName="Login">
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
        </Stack.Navigator>
    );
}

export default LoginStackNavigator;