import React from "react";

import CustomHeader from "../components/CustomHeader";
import { Content, Text } from "native-base";

const HomeScreenDetail = ({ navigation }) => {
  return (
    <>
      <CustomHeader title="Home Detail" navigation={navigation} />
      <Content padder>
        <Text>Home Detail</Text>
      </Content>
    </>
  );
};

export default HomeScreenDetail;
