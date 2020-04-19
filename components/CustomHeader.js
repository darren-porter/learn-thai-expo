import React from "react";
import {
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from "native-base";

const CustomHeader = ({ title, isHome, navigation }) => {
  return (
    <Header>
      <Left>
        {isHome ? (
          <Button transparent>
            <Icon name="menu" />
          </Button>
        ) : (
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
            <Text>Back</Text>
          </Button>
        )}
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right />
    </Header>
  );
};

export default CustomHeader;
