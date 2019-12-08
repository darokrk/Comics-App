import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";

import ActivityIndicator from "../ActivityIndicator/ActivityIndicator";

const ComicsCard = ({ item, navigation }) => {
  const { title, img, year } = item;
  return (
    <TouchableOpacity
      style={{ backgroundColor: "transparent" }}
      onPress={() => navigation.navigate("ComicsItem", { title, img, year })}
    >
      <View style={styles.listItemContainer}>
        <Text style={styles.comicsItemHeader}>{title}</Text>
        {img !== undefined ? (
          <Image source={{ uri: img }} style={styles.comicsImage} />
        ) : (
          <ActivityIndicator></ActivityIndicator>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    backgroundColor: "#f08a5d",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 16,
    padding: 20
  },
  comicsItemHeader: {
    color: "#fff",
    fontSize: 26
  },
  comicsImage: {
    backgroundColor: "transparent",
    height: 120,
    width: 120
  }
});

export default ComicsCard;
