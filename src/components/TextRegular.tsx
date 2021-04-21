import React from "react";
import colors from "@styles/colors";
import { StyleSheet, Text } from "react-native";
import fonts from "@styles/fonts";

interface TextRegularProps {
  text: string;
}

const TextRegular = ({ text }: TextRegularProps) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    fontFamily: fonts.text,
    color: colors.heading,
  },
});

export default TextRegular;
