import React from "react";
import colors from "@styles/colors";
import { StyleSheet, Text } from "react-native";
import fonts from "@styles/fonts";

interface TitleExtraLargeProps {
  text: string;
}

const TitleExtraLarge = ({ text }: TitleExtraLargeProps) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: fonts.heading,
    color: colors.heading,
  },
});

export default TitleExtraLarge;
