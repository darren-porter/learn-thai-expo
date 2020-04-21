import * as React from "react";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";

export default function TabBarItem(props) {
  return (
    <AntDesign
      name={props.name}
      size={26}
      style={styles.tabBarIcon}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}

const styles = StyleSheet.create({
  tabBarIcon: { marginBottom: 2 },
});
