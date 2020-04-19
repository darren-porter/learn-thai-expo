import React from "react";
import { Audio } from "expo-av";

import CustomHeader from "../components/CustomHeader";
import {
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";

const RenderRow = ({ item }) => (
  <View>
    <TouchableOpacity
      style={styles.item}
      onPress={() => tryPlay(item.audioFile)}
    >
      <View>
        <Text style={styles.itemText}>{item.english}</Text>
        <Text style={styles.itemText}>{item.thai}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const tryPlay = async (audioFile) => {
  try {
    const { sound: soundObject, status } = await Audio.Sound.createAsync(
      audioFile,
      {
        shouldPlay: true,
      }
    );
    // Your sound is playing!
  } catch (error) {
    // An error occurred!
  }
};

const HomeScreenDetail = ({ navigation, route }) => {
  const { title, words } = route.params;

  return (
    <>
      <CustomHeader title={title} navigation={navigation} />
      <View>
        <FlatList
          data={words}
          renderItem={({ item }) => <RenderRow item={item} />}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    </>
  );
};

export default HomeScreenDetail;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: "lightgray",
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  itemText: {
    // fontFamily: "Roboto",
    fontSize: 20,
  },
});
