import React from "react";
import { View, Button, Text } from "react-native";

const CustomHeader = ({ title, isHome, navigation }) => {
  return (
    <View>
      <View>
        {isHome ? (
          <Button title="MENU" />
        ) : (
          <Button title="BACK" onPress={() => navigation.goBack()} />
        )}
      </View>
      <View>
        <Text>{title}</Text>
      </View>
      <View />
    </View>
  );
};

export default CustomHeader;
