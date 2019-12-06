import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import Constants from "expo-constants";

import MainTitle from "./Components/MainTitle";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <MainTitle text="XKCD" />
      </View>
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
