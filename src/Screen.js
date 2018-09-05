import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Gyroscope } from "react-native-sensors";

import Backdrop from './components/Backdrop';
import Unicorn from './components/Unicorn';
import { getRandomNumber } from "../utils/utilties";

const randomVariable = Math.floor(getRandomNumber(-5, 5)); //Random Y and X values between -5 and 5

class Screen extends Component {
  constructor(props) {
    super(props);

    new Gyroscope({
      updateInterval: 50
    })
      .then(observable => {
        observable.subscribe(({ y, x }) => {
          this.setState(state => ({
            y: y + state.y,
            x: x + state.x
          }));
        });
      })
      .catch(error => {
        console.log("The sensor is not available");
      });

    this.state = {
      y: 0,
      x: 0
    };
  }

  render() {
    const { y, x } = this.state;

    // Floor the values so we have a greater chance at matching to the random variable since X/Y are returned as long decimals.
    const floorX = Math.floor(this.state.x);
    const floorY = Math.floor(this.state.y);
    const showUnicorn = ((floorY === randomVariable) &&  (floorX === randomVariable));

    console.log(showUnicorn, floorX, floorY, randomVariable);

    return (
      <View style={styles.container}>
        <Backdrop
          y={y}
          x={x} />
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
