import React from "react";

import CustomHeader from "../components/CustomHeader";
import { View, Button } from "react-native";

const SettingsScreen = ({ navigation }) => {
  return (
    <>
      <CustomHeader title="Settings" isHome={true} />
      <View>
        <Button
          title="DETAIL"
          onPress={() => navigation.navigate("SettingsDetail")}
        />
      </View>
    </>
  );
};

export default SettingsScreen;
