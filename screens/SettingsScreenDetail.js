import React from "react";

import CustomHeader from "../components/CustomHeader";
import { View, StyleSheet } from "react-native";

const SettingsScreenDetail = ({ navigation }) => {
  return (
    <>
      <CustomHeader title="Settings Detail" navigation={navigation} />
      <View style={styles.container}></View>
    </>
  );
};

export default SettingsScreenDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
