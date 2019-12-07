import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";

const ComicsCard = ({ item, navigation }) => {
  const { title, img } = item;
  return (
    <TouchableOpacity
      style={{ backgroundColor: "transparent" }}
      onPress={() => navigation.navigate("ComicsItem", { title, img })}
    >
      <View style={styles.listItemContainer}>
        <Text style={styles.comicsItemHeader}>{title}</Text>
        <Image source={{ uri: img }} style={styles.comicsImage} />
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
