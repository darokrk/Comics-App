import React, { Component } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

class ActivityIndicatorExample extends Component {
  state = { animating: true };

  closeActivityIndicator = () => {
    const spinnerInterval = setTimeout(
      () =>
        this.setState({
          animating: false
        }),
      30000
    );
    clearInterval(spinnerInterval);
  };

  componentDidMount = () => {
    this.closeActivityIndicator();
  };

  render() {
    const animating = this.state.animating;
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={animating}
          color="#ea5455"
          size="large"
          style={styles.activityIndicator}
        />
      </View>
    );
  }
}
export default ActivityIndicatorExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2b2e4a"
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 100
  }
});
