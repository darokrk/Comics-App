import { StyleSheet, ScrollView } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Constants from "expo-constants";

import Home from "../Home/Home";
import ComicsList from "../ComicsList/ComicsList";
import ComicsItem from "../ComicsItem/ComicsItem";

const RootStack = createStackNavigator(
  {
    Home: { screen: Home },
    ComicsList: { screen: ComicsList },
    ComicsItem: { screen: ComicsItem }
  },
  {
    initialRouteName: "Home"
  }
);

const MainContainer = createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 0,
    marginTop: Constants.statusBarHeight
  }
});

export default MainContainer;
