import React from "react";

import CustomHeader from "../components/CustomHeader";
import { Content, Text, Button } from "native-base";

const SettingsScreen = ({ navigation }) => {
  return (
    <>
      <CustomHeader title="Settings" isHome={true} />
      <Content padder>
        <Button onPress={() => navigation.navigate("SettingsDetail")}>
          <Text>Go Settings Detail</Text>
        </Button>
      </Content>
    </>
  );
};

export default SettingsScreen;
