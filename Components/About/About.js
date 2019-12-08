import React from "react";
import { StyleSheet, Text, View } from "react-native";

const About = () => (
  <View style={styles.listItemContainer}>
    <Text style={styles.aboutHeader}>About XKCD</Text>
    <Text style={styles.aboutContent}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa,
      cumque magnam fugiat delectus distinctio? Praesentium voluptatum magnam,
      dolores deleniti vel nisi? Dignissimos assumenda omnis consectetur
      voluptatem nulla facere voluptate porro. Sit laborum a soluta neque nulla
      repellat hic similique, dolorum id? Animi laborum alias quae corrupti
      minus perspiciatis repellendus fugiat harum facere consectetur? Sequi
      dolore impedit eligendi repellat nobis enim rerum, et placeat, totam quae
      quia, ducimus ab itaque cupiditate alias blanditiis quos minima veritatis
      repellendus nostrum ullam a quisquam. Voluptatum, tempora! Hic velit
      quibusdam suscipit blanditiis. Odit, dicta nostrum? Dolor magnam labore
      maxime, doloremque in doloribus ducimus provident.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  listItemContainer: {
    height: "100%",
    backgroundColor: "#2b2e4a"
  },
  aboutHeader: {
    fontSize: 26,
    padding: 20,
    color: "#fff"
  },
  aboutContent: {
    padding: 20,
    color: "#fff"
  }
});

export default About;
