import React from "react";

import { Animated, StyleSheet, Text, View } from "react-native";
import {
  RectButton,
  RectButtonProps,
  Swipeable,
} from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";

import fonts from "@styles/fonts";
import colors from "@styles/colors";
import { Feather } from "@expo/vector-icons";
interface PlantCardSecondaryProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
}

const PlantCardSecondary = ({
  data,
  handleRemove,
  ...rest
}: PlantCardSecondaryProps) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton style={styles.buttonRemove} onPress={handleRemove}>
              <Feather name="trash" size={32} color={colors.white} />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >
      <RectButton style={styles.container} {...rest}>
        <View style={styles.content}>
          <SvgFromUri uri={data.photo} width={50} height={50} />
          <Text style={styles.title}>{data.name}</Text>
          <View style={styles.details}>
            <Text style={styles.timeLabel}>Regar às</Text>
            <Text style={styles.time}>{data.hour}</Text>
          </View>
        </View>
      </RectButton>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.shape,
    marginVertical: 5,
  },
  content: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    marginLeft: 10,
    fontFamily: fonts.heading,
    color: colors.heading,
    fontSize: 17,
  },
  details: {
    alignItems: "flex-end",
  },
  timeLabel: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: fonts.heading,
    color: colors.body_light,
  },
  time: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: fonts.heading,
    color: colors.body_dark,
  },
  buttonRemove: {
    width: 130,
    height: 100,
    maxHeight: 110,
    backgroundColor: colors.red,
    borderRadius: 20,
    justifyContent: "center",
    position: "relative",
    top: 5,
    alignItems: "center",
    paddingLeft: 10,
  },
});

export default PlantCardSecondary;
