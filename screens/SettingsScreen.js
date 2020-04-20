import React from "react";

import CustomHeader from "../components/CustomHeader";
import { View, Button, StyleSheet } from "react-native";

const SettingsScreen = ({ navigation }) => {
  return (
    <>
      <CustomHeader title="Settings" isHome={true} />
      <View style={styles.container}>
        <Button
          title="DETAIL"
          onPress={() => navigation.navigate("SettingsDetail")}
        />
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
