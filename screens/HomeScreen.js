import React from "react";

import CustomHeader from "../components/CustomHeader";
import { Content, Text, Button } from "native-base";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <CustomHeader title="Home" isHome={true} />
      <Content padder>
        <Button onPress={() => navigation.navigate("HomeDetail")}>
          <Text>Go Home Detail</Text>
        </Button>
      </Content>
    </>
  );
};

export default HomeScreen;
