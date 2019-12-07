import React, { PureComponent } from "react";

import { StyleSheet, View, Text, Image } from "react-native";

class ComicsItem extends PureComponent {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Image
          source={{
            uri: ""
          }}
          style={styles.comicsImage}
        />
        <Text style={styles.comicsName}>
          {navigation.getParam("name", "Name of Pokemon")}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  comicsImage: {
    height: 250,
    width: 250
  },
  comicsName: {
    fontSize: 25
  }
});

export default ComicsItem;
