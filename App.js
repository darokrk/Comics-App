import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import {
  createStackNavigator,
  createAppContainer
} from "react-navigation-stack";

import Constants from "expo-constants";

import MainContainer from "./Components/MainContainer/MainContainer";

// const Stack = createStackNavigator();

const App = () => {
  return (
    // <ScrollView style={styles.container}>
    <MainContainer />
    // </ScrollView>
    // <NavigationNativeContainer style={styles.container}>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="ComicsList" component={ComicsList} />
    //     <Stack.Screen name="ComicsItem" component={ComicsItem} />
    //   </Stack.Navigator>
    // </NavigationNativeContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 0,
    marginTop: Constants.statusBarHeight
  }
});

export default App;
