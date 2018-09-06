import React, { Component } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { deviceHeight, deviceWidth, getRandomNumber } from "../../utils/utilties";

// Subtract 20 to give some space on sides and account for top/bottom phone bars
const topPosition = getRandomNumber(0, (deviceHeight - 20));
const leftPosition = getRandomNumber(0, (deviceWidth - 20));

class Unicorn extends Component {
  render() {
    const { onTap } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onTap}>
          <Image
            style={[styles.unicorn]}
            source={require('../../assets/images/unicorn.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: topPosition,
    left: leftPosition,
    zIndex: 9999
  },
  unicorn: {
    height: 100,
    width: 100
  }
});

export default Unicorn;
