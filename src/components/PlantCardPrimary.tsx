import colors from "@styles/colors";
import fonts from "@styles/fonts";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";

interface PlantCardPrimaryProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

const PlantCardPrimary = ({ data, ...rest }: PlantCardPrimaryProps) => {
  const { photo, name } = data;
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.content}>
        <SvgFromUri uri={photo} width={70} height={70} />
        <Text style={styles.text}>{name}</Text>
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "45%",
    borderRadius: 20,
    margin: 8,
    paddingVertical: 10,
    backgroundColor: colors.shape,
  },
  content: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: fonts.heading,
    color: colors.heading,
    fontSize: 13,
    marginTop: 8,
  },
});

export default PlantCardPrimary;
