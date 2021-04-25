import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import api from "services/api";
import { PlantProps } from "libs/storage";

import colors from "@styles/colors";
import fonts from "@styles/fonts";
import Header from "components/Header";
import EnvironmentButton from "components/EnvironmentButton";
import PlantCardPrimary from "components/PlantCardPrimary";
import Loading from "components/Loading";

interface Environment {
  key: string;
  title: string;
}

const PlantSelect = () => {
  const [environments, setEnvironments] = useState<Environment[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation();

  const handleSelectEnvironment = (environment: string) => {
    setEnvironmentSelected(environment);
    if (environment === "all") {
      return setFilteredPlants(plants);
    }

    const filtered = plants.filter((plant) =>
      plant.environments.includes(environment)
    );

    setFilteredPlants(filtered);
  };

  const handlePlantSelect = useCallback((plant: PlantProps) => {
    navigation.navigate("PlantSave", { plant });
  }, []);

  const handleRefresh = useCallback(() => {
    if (environmentSelected !== "all") return;
    setRefreshing(true);
    fetchAllPlants();
    setRefreshing(false);
  }, [environmentSelected]);

  const fetchAllEnvironment = useCallback(async () => {
    try {
      const { data } = await api.get(
        "plants_environments?_sort=title&_order=asc"
      );
      setEnvironments([{ key: "all", title: "Todos" }, ...data]);
    } catch (error) {
      console.log("Fetch Environments Error:", error);
    }
  }, []);

  const fetchAllPlants = useCallback(async () => {
    try {
      const { data } = await api.get(
        `plants?_sort=name&_order=asc&_page=${page}`
      );

      if (!data.length) {
        setLoadingMore(false);
        return setLoadedAll(true);
      }

      if (page > 1 && environmentSelected === "all") {
        setPlants((oldValue) => [...oldValue, ...data]);
        setFilteredPlants((oldValue) => [...oldValue, ...data]);
        setScrolling(false);
      } else {
        setPlants(data);
        setFilteredPlants(data);
      }

      setLoadingMore(false);
    } catch (error) {
      console.log("Fetch All Plants Error:", error);
    }
    setIsLoading(false);
  }, [page, loadedAll, environmentSelected]);

  const fetchMorePlants = useCallback(
    async (distance: number) => {
      if (
        distance < 1 ||
        loadingMore ||
        loadedAll ||
        environmentSelected !== "all"
      ) {
        return;
      }

      setLoadingMore(true);
      setPage((oldValue) => oldValue + 1);
      fetchAllPlants();
    },
    [loadingMore, loadedAll, environmentSelected]
  );

  const keyExtractorEnvironment = useCallback(
    (item: Environment, index: number) => {
      return String(item.key) + index;
    },
    []
  );

  const renderItemEnvironment = useCallback(
    ({ item }: { item: Environment }) => (
      <EnvironmentButton
        text={item.title}
        selected={item.key === environmentSelected}
        onPress={() => handleSelectEnvironment(item.key)}
      />
    ),
    [environmentSelected]
  );

  const keyExtractorPlants = useCallback((item: PlantProps, index: number) => {
    return String(item.id) + index;
  }, []);

  const renderItemPlants = ({ item }: { item: PlantProps }) => {
    return !refreshing ? (
      <PlantCardPrimary data={item} onPress={() => handlePlantSelect(item)} />
    ) : (
      <Loading />
    );
  };

  const handleScroll = useCallback(() => {
    setScrolling(true);
  }, []);

  useEffect(() => {
    fetchAllEnvironment();
  }, []);

  useEffect(() => {
    fetchAllPlants();
  }, []);

  if (isLoading && !plants.length) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você que colocar a sua planta</Text>
      </View>
      <View>
        <FlatList
          data={environments}
          keyExtractor={keyExtractorEnvironment}
          renderItem={renderItemEnvironment}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </View>
      <View style={styles.wrapper}>
        <FlatList
          data={filteredPlants}
          renderItem={renderItemPlants}
          keyExtractor={keyExtractorPlants}
          onRefresh={handleRefresh}
          refreshing={isLoading}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.plantList}
          onEndReachedThreshold={0.2}
          onMomentumScrollBegin={handleScroll}
          onEndReached={({ distanceFromEnd }) =>
            scrolling && fetchMorePlants(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore ? (
              <ActivityIndicator
                color={colors.green}
                style={{ marginTop: 10 }}
              />
            ) : null
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight(),
    backgroundColor: colors.background,
  },
  header: {
    padding: 33,
  },
  environmentList: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    paddingLeft: 32,
    marginVertical: 32,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },
  wrapper: {
    paddingHorizontal: 33,
  },
  plantList: {
    justifyContent: "center",
    paddingBottom: 360,
  },
});

export default PlantSelect;
