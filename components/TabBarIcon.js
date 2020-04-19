import * as React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

export default function TabBarItem(props) {
  return (
    <Ionicons
      name={props.name}
      size={22}
      style={styles.tabBarIcon}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}

const styles = StyleSheet.create({
  tabBarIcon: { marginBottom: -1 },
});
