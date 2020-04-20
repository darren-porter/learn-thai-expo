import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "../components/CustomTabBar";

import HomeStack from "./HomeStack";
import SettingsStack from "./SettingsStack";

const TabBottom = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <TabBottom.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <TabBottom.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabIcon: "home",
        }}
      />
      <TabBottom.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabIcon: "setting",
        }}
      />
    </TabBottom.Navigator>
  );
};

export default BottomTabs;
