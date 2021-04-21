import React from "react";

import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import colors from "@styles/colors";
import UserIdentification from "screens/UserIndentification";
import Confirmation from "screens/Confirmation";
import Welcome from "screens/Welcome";
import PlantSelect from "screens/PlantSelect";

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
      <Screen name="PlantSelect" component={PlantSelect} />
    </Navigator>
  );
};

export default MainStack;
