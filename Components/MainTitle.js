import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MainTitle = ({ text }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#6a2c70",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    color: "white"
  }
});

export default MainTitle;
