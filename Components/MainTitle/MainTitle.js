import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const MainTitle = ({ text, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("About")}>
      <View style={styles.item}>
        <Text style={styles.title}>{text}</Text>
        <Text style={styles.subtitle}>Click to find out more</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#903749",
    padding: 20,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: "#fff"
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    color: "#fff"
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff"
  }
});

export default MainTitle;
