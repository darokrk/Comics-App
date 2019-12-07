import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import Constants from "expo-constants";

import MainTitle from "./Components/MainTitle/MainTitle";
import ComicsList from "./Components/ComicsList/ComicsList";

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <MainTitle text="XKCD" />
      <ComicsList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 0,
    marginTop: Constants.statusBarHeight
  },
  red: {
    color: "#888"
  }
});

export default App;
