import * as React from "react";
import { Text, StyleSheet } from "react-native";

export function MonoText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "os-semi-bold" }]} />
  );
}

export function Heading(props) {
  return <Text {...props} style={[styles.heading, props.style]} />;
}

export function SubHeading(props) {
  return <Text {...props} style={[styles.subHeading, props.style]} />;
}

export function Paragraph(props) {
  return <Text {...props} style={[props.style, styles.paragraph]} />;
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontFamily: "os-bold",
    letterSpacing: -2,
  },
  subHeading: {
    fontSize: 17,
    fontFamily: "os-semi-bold",
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  paragraph: {
    fontSize: 14,
    fontFamily: "os-semi-bold",
    color: "gray",
  },
});
