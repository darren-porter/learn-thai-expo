import React from "react";

import { View, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import TabBarIcon from "./TabBarIcon";

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            style={styles.tabBarItem}
            onPress={onPress}
            onLongPress={onLongPress}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["active"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            key={index}
          >
            <TabBarIcon name={options.tabIcon} focused={isFocused} />
            <MonoText
              style={[
                styles.tabBarText,
                {
                  color: isFocused
                    ? Colors.tabIconSelected
                    : Colors.tabIconDefault,
                },
              ]}
            >
              {label}
            </MonoText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tabBarItem: {
    alignItems: "center",
    padding: 12,
    paddingBottom: 8,
  },
  tabBarText: {
    fontSize: 14,
    textTransform: "uppercase",
  },
});
