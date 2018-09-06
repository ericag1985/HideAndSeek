import React, { Component } from "react";
import {Image, StyleSheet} from "react-native";
import { deviceHeight, deviceWidth } from "../../utils/utilties";

class Backdrop extends Component {
  render() {
    const { y, x } = this.props;

    const imageWidth = 4 * deviceWidth;
    const imageHeight = 3 * deviceHeight;
    const backdropDimensions = {
      width: imageWidth,
      height: imageHeight
    };

    const positionOnScreenX = -imageWidth / 2;
    const positionOnScreenY = -imageHeight / 2;

    const movementX = -y / 10 * imageWidth;
    const movementY = -x / 10 * imageHeight;

    return (
      <Image
        translateX={positionOnScreenX + movementX}
        translateY={positionOnScreenY + movementY}
        style={[styles.backdrop, backdropDimensions]}
        source={require('../../assets/images/backdrop.jpg')} />
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
