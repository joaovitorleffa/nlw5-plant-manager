import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import WaterDropIcon from "assets/waterdrop.png";
import colors from "@styles/colors";
import fonts from "@styles/fonts";

interface WateringCardProps {
  text: string;
}

const WateringCard = ({ text }: WateringCardProps) => {
  return (
    <View style={styles.tipContainer}>
      <Image source={WaterDropIcon} style={styles.tipImage} />
      <Text style={styles.tipText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tipContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue_light,
    padding: 20,
    borderRadius: 20,
  },
  tipImage: {
    width: 56,
    height: 56,
  },
  tipText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.text,
    color: colors.blue,
    fontSize: 17,
  },
});

export default WateringCard;
