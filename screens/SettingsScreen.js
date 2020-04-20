import React from "react";

import CustomHeader from "../components/CustomHeader";
import CustomButton from "../components/CustomButton";
import { View, StyleSheet } from "react-native";

const SettingsScreen = () => {
  return (
    <>
      <CustomHeader title="Settings" isHome={true} />
      <View style={styles.container}>
        <CustomButton title="Detail" link="SettingsDetail" />
      </View>
    </>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
