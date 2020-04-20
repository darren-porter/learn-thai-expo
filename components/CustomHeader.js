import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CustomHeader = ({ title, isHome, navigation }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        {isHome ? (
          <TouchableOpacity>
            <Ionicons name="ios-menu" size={30} style={styles.headerIcon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="ios-arrow-back"
              size={30}
              style={styles.headerIcon}
            />
            <Text>Back</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.headerCenter}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.headerRight} />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 55,
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
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  back: {
    flexDirection: "row",
    alignItems: "center",
  },
});
