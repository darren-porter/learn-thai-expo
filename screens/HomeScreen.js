import React, { useState, useEffect } from "react";
import { Audio } from "expo-av";

import CustomHeader from "../components/CustomHeader";
import { View, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { Content, Text, Button } from "native-base";

const RenderWords = ({ item }) => (
  <View>
    <TouchableOpacity style={styles.item} onPress={tryPlays}>
      <Text>{item.english}</Text>
      <Text>{item.thai}</Text>
      <Text>{item.phonetic}</Text>
    </TouchableOpacity>
  </View>
);

async function tryPlays() {
  const soundObject = new Audio.Sound();
  try {
    await soundObject.loadAsync(require("../assets/sounds/hello.mp3"));
    await soundObject.playAsync();
    // Your sound is playing!
  } catch (error) {
    // An error occurred!
  }
}

const HomeScreen = ({ navigation }) => {
  const [words, setWords] = useState([
    {
      english: "hello",
      thai: "สวัสดี",
      phonetic: "sà-wàt-dee",
    },
    {
      english: "goodbye",
      thai: "ลาก่อน",
      phonetic: "laa gòn",
    },
  ]);

  return (
    <>
      <CustomHeader title="Home" isHome={true} />
      <Content padder>
        <Button onPress={() => navigation.navigate("HomeDetail")}>
          <Text>Go Home Detail</Text>
        </Button>
        <FlatList
          data={words}
          renderItem={({ item }) => <RenderWords item={item} />}
          keyExtractor={(item, index) => item + index}
        />
      </Content>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: "lightgray",
    marginVertical: 5,
  },
});
