import React from "react";

import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";

import colors from "@styles/colors";

import UserIdentification from "screens/UserIdentification";
import Confirmation from "screens/Confirmation";
import Welcome from "screens/Welcome";
import PlantSave from "screens/PlantSave";
import MyPlants from "screens/MyPlants";
import AuthRoutes from "./tab.routes";

const { Navigator, Screen } = createStackNavigator();

const options: StackNavigationOptions = {
  cardStyle: {
    backgroundColor: colors.white,
  },
};

const MainStack = () => {
  return (
    <Navigator
      headerMode="none"
      initialRouteName="Welcome"
      screenOptions={options}
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="User" component={UserIdentification} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="PlantSelect" component={AuthRoutes} />
      <Screen name="PlantSave" component={PlantSave} />
      <Screen name="MyPlants" component={AuthRoutes} />
    </Navigator>
  );
};

export default MainStack;
