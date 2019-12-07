import React, { PureComponent } from "react";

import { StyleSheet, View, Text, Image } from "react-native";

class ComicsItem extends PureComponent {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Image
          source={{
            uri: `${navigation.getParam("img")}`
          }}
          style={styles.comicsImage}
        />
        <Text style={styles.comicsName}>
          {navigation.getParam("title", "Comics Item Name")}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  comicsImage: {
    width: "100%",
    height: "80%"
  },
  comicsName: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 30
  }
});

export default ComicsItem;
