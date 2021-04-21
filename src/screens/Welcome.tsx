import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import WateringImage from "@assets/watering.png";
import colors from "@styles/colors";
import SmallButton from "components/SmallButton";
import TitleExtraLarge from "components/TitleExtraLarge";
import TextRegular from "components/TextRegular";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const Welcome = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("User");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TitleExtraLarge text={`Gerencie \n suas plantas de \n forma fácil`} />
        <Image
          style={styles.image}
          source={WateringImage}
          resizeMode="contain"
        />
        <View>
          <TextRegular
            text="Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
  sempre que precisar."
          />
        </View>
        <SmallButton onPress={handleNavigation}>
          <Feather name="chevron-right" style={styles.buttonIcon} />
        </SmallButton>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginVertical: 18,
    marginHorizontal: 22,
    alignItems: "center",
    justifyContent: "space-around",
  },
  image: {
    width: Dimensions.get("window").width * 1.7,
    height: 284,
  },
  buttonIcon: {
    fontSize: 22,
    color: colors.white,
  },
});

export default Welcome;
