import React from "react";
import CustomHeader from "../components/CustomHeader";
import { View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <CustomHeader title="Learn Thai" isHome={true} />
      <View>
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
