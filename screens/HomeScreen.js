import React from "react";
import CustomHeader from "../components/CustomHeader";
import { Content, Text, Card, CardItem, Body } from "native-base";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <CustomHeader title="Learn Thai" isHome={true} />
      <Content padder>
        <Card>
          <CardItem
            button
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
          >
            <Body>
              <Text>Basics</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </>
  );
};

export default HomeScreen;
