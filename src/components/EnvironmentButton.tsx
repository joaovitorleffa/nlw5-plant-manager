import colors from "@styles/colors";
import fonts from "@styles/fonts";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

interface EnvironmentButtonProps extends RectButtonProps {
  text: string;
  selected?: boolean;
}

const EnvironmentButton = ({
  text,
  selected = false,
  ...rest
}: EnvironmentButtonProps) => {
  return (
    <RectButton
      {...rest}
      style={[styles.button, selected && styles.buttonActive]}
    >
      <Text style={[styles.text, selected && styles.textActive]}>{text}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 76,
    borderRadius: 12,
    paddingVertical: 8,
    marginHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.shape,
  },
  buttonActive: {
    backgroundColor: colors.green_light,
  },
  text: {
    fontSize: 13,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  textActive: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
  },
});

export default EnvironmentButton;
