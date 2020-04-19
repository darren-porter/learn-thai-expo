import React from "react";
import { View, Button } from "react-native";

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View>
      <View>
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
            <Button
              title={label}
              vertical
              onPress={onPress}
              onLongPress={onLongPress}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ["active"] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              key={index}
            />
          );
        })}
      </View>
    </View>
  );
};

export default CustomTabBar;
