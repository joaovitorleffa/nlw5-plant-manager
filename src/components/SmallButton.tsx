import colors from "@styles/colors";
import React, { ReactNode } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface SmallButtonProps extends TouchableOpacityProps {
  children: ReactNode;
}

const SmallButton = ({ children, ...rest }: SmallButtonProps) => {
  return (
    <TouchableOpacity {...rest} style={styles.button} activeOpacity={0.7}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
});

export default SmallButton;
