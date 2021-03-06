import React, { PureComponent } from "react";
import { StyleSheet, Platform, View, Text, Button, Image } from "react-native";

class Home extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Button
        color="#000"
        title="Go to Comics List"
        onPress={() => navigation.navigate("ComicsList")}
      />
    )
  });
  render() {
    return (
      <View style={styles.homeDiv}>
        <Image
          source={{
            uri:
              "https://shop.line-scdn.net/themeshop/v1/products/b7/0c/dc/b70cdcf3-cc84-40d9-ad2d-4ac8a7924266/38/WEBSTORE/icon_198x278.png"
          }}
          style={styles.homePageImage}
        />
        <Text style={styles.header}>Welcome to Comics Api App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeDiv: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2b2e4a"
  },
  homePageImage: {
    width: "75%",
    height: "60%"
  },
  header: {
    marginTop: 30,
    fontSize: 30,
    color: "#e84545",
    textAlign: "center",
    ...Platform.select({
      ios: {
        fontFamily: "Arial"
      },
      android: {
        fontFamily: "monospace"
      }
    })
  }
});

export default Home;
