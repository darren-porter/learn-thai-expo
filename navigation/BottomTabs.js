import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import SettingsStack from "./SettingsStack";
import CustomTabBar from "../components/CustomTabBar";

const Tabs = createBottomTabNavigator();

const BottomTabs = ({}) => {
  return (
    <Tabs.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tabs.Screen
        name="Home"
        options={{
          tabIcon: "home",
        }}
        component={HomeStack}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          tabIcon: "setting",
        }}
        component={SettingsStack}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
