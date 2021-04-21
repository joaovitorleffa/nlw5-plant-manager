import Button from "components/Button";
import Emoji from "components/Emoji";
import TextRegular from "components/TextRegular";
import Title from "components/Title";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

// import { Container } from './styles';

const Confirmation: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentEmoji}>
        <Emoji size={64}>😁</Emoji>
      </View>
      <View style={styles.wrapper}>
        <Title text="Prontinho" />
        <View style={styles.text}>
          <TextRegular text=" Agora vamos começar a cuidar das suas plantinhas com muito cuidado." />
        </View>
      </View>
      <Button title="Começar" />
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
