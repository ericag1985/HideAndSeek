import React, { Component } from "react";
import {Image, StyleSheet} from "react-native";
import { deviceHeight, deviceWidth } from "../../utils/utilties";

class Backdrop extends Component {
  render() {
    const { y } = this.props;

    const imageWidth = 4 * deviceWidth;
    const backdropDimensions = {
      width: imageWidth,
      height: deviceHeight
    };

    const positionOnScreenX = -imageWidth / 2;
    // The y axis of the sensor data resembles what we need for the x axis in the image
    const movementX = -y / 10 * imageWidth;

    return (
      <Image
        translateX={positionOnScreenX + movementX}
        style={[styles.backdrop, backdropDimensions]}
        source={require('../../assets/images/backdrop.jpg')}
      />
    );
  }
}

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0
  }
});

export default Backdrop;
