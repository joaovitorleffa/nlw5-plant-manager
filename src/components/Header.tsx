import React, { useEffect, useState } from "react";
import colors from "@styles/colors";
import fonts from "@styles/fonts";
import { Image, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Header = () => {
  const [userName, setUserName] = useState("");

  const loadStorageUserName = async () => {
    const user = await AsyncStorage.getItem("@plantmanager:user");
    user && setUserName(user);
  };

  useEffect(() => {
    loadStorageUserName();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <Image
        style={styles.image}
        source={{ uri: "https://avatars.githubusercontent.com/u/44384402?v=4" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 100,
  },
});

export default Header;
