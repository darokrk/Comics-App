import React, { PureComponent } from "react";

import { StyleSheet, View, Text, Image } from "react-native";

class ComicsItem extends PureComponent {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: `${navigation.getParam("img")}`
          }}
          style={styles.comicsImage}
        />
        <Text style={styles.comicsName}>
          {`${navigation.getParam(
            "title",
            "Comics Item Name"
          )} - ${navigation.getParam("year", "Comics Item Name")}`}
        </Text>
        <Text style={styles.comicsName}></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2b2e4a"
  },
  comicsImage: {
    width: 300,
    height: 300,
    borderColor: "#000",
    borderWidth: 1
  },
  comicsName: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 30,
    color: "#fff"
  }
});

export default ComicsItem;
