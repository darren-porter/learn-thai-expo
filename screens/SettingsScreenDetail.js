import React from "react";

import CustomHeader from "../components/CustomHeader";
import { Content, Text } from "native-base";

const SettingsScreenDetail = ({ navigation }) => {
  return (
    <>
      <CustomHeader title="Settings Detail" navigation={navigation} />
      <Content padder>
        <Text>Settings Detail</Text>
      </Content>
    </>
  );
};

export default SettingsScreenDetail;
