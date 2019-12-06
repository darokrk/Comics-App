import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

import MainTitle from "./Components/MainTitle";

export default function App() {
  return (
    <View style={styles.container}>
      <MainTitle text="XKCD" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 0,
    marginTop: Constants.statusBarHeight
  }
});
