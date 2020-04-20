import React from "react";
import CustomHeader from "../components/CustomHeader";
import CustomButton from "../components/CustomButton";
import { View, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <>
      <CustomHeader title="Learn Thai" isHome={true} />
      <View style={styles.container}>
        <CustomButton title="Basics" link="HomeDetail" />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
