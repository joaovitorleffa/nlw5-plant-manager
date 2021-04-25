import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./stack.routes";

const Routes = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default Routes;
