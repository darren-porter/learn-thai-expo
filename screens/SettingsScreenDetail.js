import React from "react";

import CustomHeader from "../components/CustomHeader";
import { View, Text } from "react-native";

const SettingsScreenDetail = ({ navigation }) => {
  return (
    <>
      <CustomHeader title="Settings Detail" navigation={navigation} />
      <View>
        <Text>Settings Detail</Text>
      </View>
    </>
  );
};

export default SettingsScreenDetail;
