import * as React from "react";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CustomButton({ title, link }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(link)}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.buttonBackground,
    padding: 10,
  },
  buttonText: {
    fontSize: 14,
    textTransform: "uppercase",
    color: Colors.buttonText,
  },
});
