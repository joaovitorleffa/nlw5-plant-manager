import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import Button from "components/Button";
import Emoji from "components/Emoji";
import TextRegular from "components/TextRegular";
import Title from "components/Title";

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: "hug" | "smile";
  nextScreen: string;
}

const emojis = {
  hug: "🤗",
  smile: "😁",
};

const Confirmation = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {
    title,
    buttonTitle,
    icon,
    nextScreen,
    subtitle,
  } = route.params as Params;

  const handleNavigation = () => {
    navigation.navigate(nextScreen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentEmoji}>
        <Emoji size={64}>{icon === "hug" ? emojis.hug : emojis.smile}</Emoji>
      </View>
      <View style={styles.wrapper}>
        <Title text={title} />
        <View style={styles.text}>
          <TextRegular text={subtitle} />
        </View>
      </View>
      <Button title={buttonTitle} onPress={handleNavigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 12,
  },
  contentEmoji: {
    marginBottom: 48,
  },
  wrapper: {
    marginBottom: 40,
    alignItems: "center",
  },
  text: {
    marginTop: 16,
  },
});

export default Confirmation;
