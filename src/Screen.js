import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Gyroscope } from "react-native-sensors";

import Backdrop from './components/Backdrop';
import Unicorn from './components/Unicorn';
import { getRandomNumber } from "../utils/utilties";

const randomYVariable = getRandomNumber(-10, 10); //Random Y between -10 and 10

class Screen extends Component {
  constructor(props) {
    super(props);

    new Gyroscope({
      updateInterval: 50
    })
      .then(observable => {
        observable.subscribe(({ y }) => {
          this.setState(state => ({
            y: y + state.y
          }));
        });
      })
      .catch(error => {
        console.log("The sensor is not available");
      });

    this.state = {
      y: 0
    };
  }

  render() {
    const { y } = this.state;
    const showUnicorn = Math.floor(y) === Math.floor(randomYVariable);

    console.log(Math.floor(y) === Math.floor(randomYVariable), Math.floor(y), Math.floor(randomYVariable));

    return (
      <View style={styles.container}>
        <Backdrop
          y={y} />
        {showUnicorn &&
          <Unicorn />}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

export default Screen;
