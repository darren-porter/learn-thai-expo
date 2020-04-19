import React from "react";
import { Audio } from "expo-av";

import CustomHeader from "../components/CustomHeader";
import { View, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { Content, Text, Icon } from "native-base";

const RenderWords = ({ item }) => (
  <View>
    <TouchableOpacity
      style={styles.item}
      onPress={() => tryPlay(item.audioFile)}
    >
      <View>
        <Text style={styles.itemText}>{item.english}</Text>
        <Text style={styles.itemText}>{item.thai}</Text>
      </View>
      <View>
        <Icon name="play" />
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
      <Content padder>
        <FlatList
          data={words}
          renderItem={({ item }) => <RenderWords item={item} />}
          keyExtractor={(item, index) => item + index}
        />
      </Content>
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
    fontFamily: "Roboto",
    fontSize: 20,
  },
});
