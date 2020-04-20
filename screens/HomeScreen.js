import React from "react";
import CustomHeader from "../components/CustomHeader";
import { View, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <CustomHeader title="Learn Thai" isHome={true} />
      <View style={styles.container}>
        <Button
          title="BASICS"
          onPress={() =>
            navigation.navigate("HomeDetail", {
              title: "Basics",
              words: [
                {
                  english: "hello",
                  thai: "สวัสดี",
                  audioFile: require("../assets/sounds/hello.mp3"),
                },
              ],
            })
          }
        />
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
