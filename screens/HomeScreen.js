import React from "react";
import CustomHeader from "../components/CustomHeader";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Paragraph, SubHeading } from "../components/StyledText";

const DATA = [
  {
    id: "1",
    title: "Food & Drink",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus nisi.",
    icon: "rest",
    locked: false,
  },
  {
    id: "2",
    title: "Greetings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus nisi.",
    icon: "team",
    locked: false,
  },
  {
    id: "3",
    title: "Shopping",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus nisi.",
    icon: "shoppingcart",
    locked: true,
  },
  {
    id: "4",
    title: "Finance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus nisi.",
    icon: "creditcard",
    locked: true,
  },
  {
    id: "5",
    title: "Numbers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus nisi.",
    icon: "calculator",
    locked: true,
  },
];

function Item({ item }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("HomeDetail")}
    >
      {item.locked ? (
        <AntDesign name={"lock"} size={30} style={styles.locked} />
      ) : null}
      <AntDesign name={item.icon} size={65} style={styles.icon} />
      <View style={styles.inner}>
        <SubHeading style={styles.text}>{item.title}</SubHeading>
        <Paragraph>{item.description}</Paragraph>
      </View>
    </TouchableOpacity>
  );
}

const HomeScreen = () => {
  return (
    <>
      <CustomHeader title="Learn Thai" isHome={true} />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 14,
    marginBottom: 20,
  },
  inner: {
    flex: 1,
    padding: 20,
  },
  icon: {
    justifyContent: "center",
    padding: 20,
  },
  locked: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
