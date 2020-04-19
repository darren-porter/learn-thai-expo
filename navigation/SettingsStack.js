import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from "../screens/SettingsScreen";
import SettingsScreenDetail from "../screens/SettingsScreenDetail";

const navOptionHandler = () => ({
  headerShown: false,
});

const StackSettings = createStackNavigator();

const SettingsStack = () => {
  return (
    <StackSettings.Navigator initialRouteName="Settings">
      <StackSettings.Screen
        name="Settings"
        component={SettingsScreen}
        options={navOptionHandler}
      />
      <StackSettings.Screen
        name="SettingsDetail"
        component={SettingsScreenDetail}
        options={navOptionHandler}
      />
    </StackSettings.Navigator>
  );
};

export default SettingsStack;
