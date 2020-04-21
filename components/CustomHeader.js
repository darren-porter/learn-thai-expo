import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Heading } from "../components/StyledText";

const CustomHeader = ({ title, isHome, navigation }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        {isHome ? undefined : (
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="back" size={30} style={styles.headerIcon} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.headerCenter}>
        <Heading style={styles.title}>{title}</Heading>
      </View>
      <View style={styles.headerRight} />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 60,
    marginTop: 20,
  },
  headerIcon: {
    padding: 10,
    marginLeft: 5,
  },
  headerLeft: {
    flex: 1,
    justifyContent: "center",
  },
  headerCenter: {
    flex: 1.5,
    justifyContent: "center",
  },
  headerRight: {
    flex: 1,
  },
  title: {
    textAlign: "center",
  },
  back: {
    flexDirection: "row",
    alignItems: "center",
  },
});
