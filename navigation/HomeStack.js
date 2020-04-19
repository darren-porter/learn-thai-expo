import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import HomeScreenDetail from "../screens/HomeScreenDetail";

const navOptionHandler = () => ({
  headerShown: false,
});

const StackHome = createStackNavigator();

const HomeStack = () => {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen
        name="Home"
        component={HomeScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="HomeDetail"
        component={HomeScreenDetail}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
};

export default HomeStack;
