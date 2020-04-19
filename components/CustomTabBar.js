import React from "react";
import { Footer, FooterTab, Button, Icon, Text } from "native-base";

const CustomTabBar = ({ state, descriptors, navigation, icon }) => {
  return (
    <Footer>
      <FooterTab>
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
              vertical
              onPress={onPress}
              onLongPress={onLongPress}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ["active"] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              key={index}
            >
              <Icon name={options.tabIcon} />
              <Text>{label}</Text>
            </Button>
          );
        })}
      </FooterTab>
    </Footer>
  );
};

export default CustomTabBar;
