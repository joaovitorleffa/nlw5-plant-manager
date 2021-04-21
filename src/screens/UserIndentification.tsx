import { useNavigation } from "@react-navigation/core";
import colors from "@styles/colors";
import Button from "components/Button";
import Emoji from "components/Emoji";
import Title from "components/Title";
import React, { useCallback, useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Platform,
} from "react-native";

const UserIdentification = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState("");

  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate("Confirmation");
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!name);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputChange = (value: string) => {
    setName(value);
    setIsFocused(!!value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.contentEmoji}>
              <Emoji>😃</Emoji>
            </View>
            <Title text={`Como podemos \n chamar você?`} />
            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && { borderColor: colors.green },
              ]}
              placeholder="Digite um nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />
            <View style={styles.footer}>
              <Button title="Confirmar" onPress={handleSubmit} />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    width: "100%",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 54,
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: "100%",
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: "center",
  },
  footer: {
    marginTop: 40,
  },
  contentEmoji: {
    marginBottom: 16,
  },
});

export default UserIdentification;
