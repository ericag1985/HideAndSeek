import React, { Component, Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { Gyroscope } from "react-native-sensors";

import Backdrop from './components/Backdrop';
import Unicorn from './components/Unicorn';
import GameRules from "./components/GameRules";
import Treasure from "./components/Treasure";
import { getRandomNumber } from "../utils/utilties";

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
      x: 0,
      randomVariable: null,
      showStartScreen: true,
      showGameScreen: false,
      showTreasureScreen: false
    };
  }

  //Get a random variable to match for hunt
  getRandomVariable = () => {
    const randomVariable = Math.floor(getRandomNumber(-5, 5)); //Random Y and X values between -5 and 5

    this.setState({
      randomVariable: randomVariable
    })
  };

  // Start Hunt
  handleStartSearch = () => {
    this.getRandomVariable();

    this.setState({
      showStartScreen: false,
      showGameScreen: true,
      showTreasureScreen: false
    })
  };

  // Find Unicorn!
  handleTapUnicorn = () => {
    this.setState({
      showGameScreen: false,
      showTreasureScreen: true
    })
  };

  render() {
    const { y, x, randomVariable, showStartScreen, showGameScreen, showTreasureScreen } = this.state;

    // Floor the values so we have a greater chance at matching to the random variable since X/Y are returned as long decimals.
    const floorX = Math.floor(this.state.x);
    const floorY = Math.floor(this.state.y);
    const showUnicorn = ((floorY === randomVariable) &&  (floorX === randomVariable));

    console.log(showUnicorn, floorX, floorY, randomVariable);

    return (
      <View style={styles.container}>
        {showStartScreen &&
          <GameRules
            onClose={this.handleStartSearch}
          />
        }

        {showGameScreen &&
          <Fragment>
            <Backdrop
              y={y}
              x={x} />

            {showUnicorn &&
              <Unicorn
                onTap={this.handleTapUnicorn} />}
          </Fragment>
        }

        {showTreasureScreen &&
          <Treasure
            onClose={this.handleStartSearch}/>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5d4776"
  }
});

export default Screen;
