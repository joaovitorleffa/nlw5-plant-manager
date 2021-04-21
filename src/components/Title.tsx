import colors from "@styles/colors";
import fonts from "@styles/fonts";
import React from "react";
import { StyleSheet, Text } from "react-native";

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
  },
});

export default Title;
