import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Accelerometer } from "react-native-sensors";

import Game from "./components/ballgame/Board";

class BallScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      observable: null,
      error: null
    };

    new Accelerometer({
      updateInterval: 16
    })
      .then(observable => {
        this.setState({ observable });
      })
      .catch(error => {
        this.setState({ error: "The sensor is not available" });
      });
  }

  render() {
    const { error, observable } = this.state;

    if (error) {
      return (
        <View style={styles.container}>
          <Text style={styles.headline}>{error}</Text>
        </View>
      );
    }

    if (!observable) {
      return (
        <View style={styles.container}>
          <Text style={styles.headline}>Loading Sensor</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Game data={observable} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  headline: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default BallScreen;
