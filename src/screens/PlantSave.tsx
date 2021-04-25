import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SvgFromUri } from "react-native-svg";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import { format, isBefore } from "date-fns";

import colors from "@styles/colors";
import Title from "components/Title";
import Button from "components/Button";
import TextRegular from "components/TextRegular";
import fonts from "@styles/fonts";
import { PlantProps, savePlant } from "libs/storage";
import WateringCard from "components/WateringCard";

interface Params {
  plant: PlantProps;
}

const PlantSave = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDateTimePicker, setShowDateTimePicker] = useState(
    Platform.OS === "ios"
  );

  const navigation = useNavigation();
  const route = useRoute();
  const { plant } = route.params as Params;

  const handleChangeTime = useCallback(
    (_: Event, dateTime: Date | undefined) => {
      if (Platform.OS === "android") {
        setShowDateTimePicker((oldValue) => !oldValue);
      }

      if (dateTime && isBefore(dateTime, new Date())) {
        setSelectedDateTime(new Date());
        return Alert.alert(
          "Opa, aconteceu algo de errado!",
          "Escolha um horário futuro! 😀"
        );
      }

      if (dateTime) {
        setSelectedDateTime(dateTime);
      }
    },
    []
  );

  const handleOpenDateTimePickerForAndroid = useCallback(() => {
    setShowDateTimePicker((oldValue) => !oldValue);
  }, []);

  const handleSave = useCallback(async () => {
    try {
      await savePlant({ ...plant, dateTimeNotification: selectedDateTime });
      navigation.navigate("Confirmation", {
        title: "Tudo certo",
        subtitle:
          "Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.",
        icon: "hug",
        buttonTitle: "Muito obrigado :D",
        nextScreen: "MyPlants",
      });
    } catch {
      Alert.alert("Que pena!", "Não foi possível salvar! 😥");
    }
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.plantInfo}>
          <SvgFromUri uri={plant.photo} height={150} width={150} />

          <Title text={plant.name} />
          <TextRegular text={plant.about} />
        </View>
        <View style={styles.controller}>
          <View style={styles.waterTips}>
            <WateringCard text={plant.water_tips} />
          </View>

          <Text style={styles.alertLabel}>
            Escolha o melhor horário para ser lembrado:
          </Text>

          {showDateTimePicker && (
            <DateTimePicker
              value={selectedDateTime}
              mode="time"
              display="spinner"
              onChange={handleChangeTime}
            />
          )}

          {Platform.OS === "android" && (
            <TouchableOpacity
              style={styles.dateTimePickerButton}
              onPress={handleOpenDateTimePickerForAndroid}
            >
              <Text style={styles.dateTimePickerText}>{`Mudar horário ${format(
                selectedDateTime,
                "HH:mm"
              )}`}</Text>
            </TouchableOpacity>
          )}

          <Button title="Cadastrar planta" onPress={handleSave} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.shape,
    justifyContent: "space-between",
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  controller: {
    backgroundColor: colors.white,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: getBottomSpace() || 20,
  },
  waterTips: {
    position: "relative",
    bottom: 60,
    width: "100%",
  },
  alertLabel: {
    textAlign: "center",
    fontFamily: fonts.complement,
    color: colors.heading,
    fontSize: 12,
    marginBottom: 5,
  },
  dateTimePickerButton: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 40,
  },
  dateTimePickerText: {
    color: colors.heading,
    fontSize: 24,
    fontFamily: fonts.text,
  },
});

export default PlantSave;
