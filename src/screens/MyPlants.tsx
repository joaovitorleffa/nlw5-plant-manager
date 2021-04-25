import colors from "@styles/colors";
import Header from "components/Header";
import PlantCardSecondary from "components/PlantCardSecondary";
import Title from "components/Title";
import WateringCard from "components/WateringCard";
import { formatDistance } from "date-fns/esm";
import { pt } from "date-fns/locale";
import { loadPlant, PlantProps } from "libs/storage";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const MyPlants = () => {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>("");

  const loadStorageData = useCallback(async () => {
    const plants = await loadPlant();

    const nextTime = formatDistance(
      new Date(plants[0].dateTimeNotification).getTime(),
      new Date().getTime(),
      { locale: pt }
    );

    setNextWatered(
      `Não esqueça de regar a ${plants[0].name} às ${nextTime} horas.`
    );

    setMyPlants(plants);
  }, []);

  const keyExtractor = useCallback((item: PlantProps) => String(item.id), []);

  const renderItem = useCallback(
    ({ item }) => <PlantCardSecondary data={item} />,
    []
  );

  useEffect(() => {
    loadStorageData();
  }, []);

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.watering}>
        <WateringCard text={nextWatered} />
      </View>

      <View style={styles.plants}>
        <View style={styles.contentTitle}>
          <Title text="Próximas regadas" />
        </View>

        <FlatList
          data={myPlants}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingTop: 50,
    backgroundColor: colors.background,
  },
  watering: {
    marginTop: 16,
    width: "100%",
  },
  contentTitle: {
    paddingVertical: 20,
  },
  plants: {
    flex: 1,
    width: "100%",
  },
});

export default MyPlants;
