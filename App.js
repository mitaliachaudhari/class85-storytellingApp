import * as React from "react";
//import { NavigationContainer } from "@react-navigation/native";
//import DrawerNavigator from "./navigation/DrawerNavigator";
import {createSwitchNavigator, createAppContainer} from "react-navigation"
import LoginScreen from "./screens/LoginScreen";
import LoadingScreen from "./screens/LoadingScreen";
import DashboardScreen from "./screens/DashboardScreen";

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen:LoginScreen,
  DashboardScreen:DashboardScreen
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

export default function App() {
  return (
    <AppNavigator/>
  );
}
