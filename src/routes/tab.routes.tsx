import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "@styles/colors";
import PlantSelect from "screens/PlantSelect";
import { MaterialIcons } from "@expo/vector-icons";
import MyPlants from "screens/MyPlants";

const { Navigator, Screen } = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: "beside-icon",
        style: {
          height: 60,
        },
      }}
    >
      <Screen
        name="NewPlants"
        component={PlantSelect}
        options={{
          title: "Novas Plantas",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="MyPlants"
        component={MyPlants}
        options={{
          title: "Minhas Plantas",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default AuthRoutes;
