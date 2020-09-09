import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../../pages/Home';
import HeaderHome from '../HeaderHome';
import Inbox from "../../pages/Inbox";

const Stack = createStackNavigator();

const HomeStackNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              header: () => (
                <HeaderHome />
              )

            }}
          />
          <Stack.Screen 
          name="Inbox"
          component={Inbox}
          />
        </Stack.Navigator>
    );
}

export default HomeStackNavigator;