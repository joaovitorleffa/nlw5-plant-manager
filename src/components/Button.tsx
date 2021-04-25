import colors from "@styles/colors";
import React from "react";
import fonts from "@styles/fonts";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity {...rest} style={styles.button} activeOpacity={0.7}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    borderRadius: 16,
    paddingVertical: 16,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 17,
    fontFamily: fonts.heading,
    color: colors.white,
  },
});

export default Button;
