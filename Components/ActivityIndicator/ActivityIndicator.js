import React, { Component } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

class ActivityIndicatorExample extends Component {
  state = { animating: true };

  closeActivityIndicator = () => {
    const oko = setTimeout(
      () =>
        this.setState({
          animating: false
        }),
      30000
    );
    clearInterval(oko);
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
          color="#bc2b78"
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
    marginTop: 70
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80
  }
});
