import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

class GameRules extends Component {
  render() {
    const { onClose } = this.props;

    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.heading]}>Hide and Seek Unicorn!</Text>

        <Image
          style={[styles.unicorn]}
          source={require('../../assets/images/unicorn.png')} />

        <Text style={styles.text}>There is a unicorn hidden somewhere in the area, move your phone around to find him. Once you find
          him, give him a tap to recieve his treasure!</Text>

        <TouchableOpacity onPress={onClose}>
          <Text style={[styles.text,styles.button]}>START SEARCH</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  text: {
    color: '#fff',
    marginHorizontal: 25
  },
  heading: {
    fontSize: 20
  },
  unicorn: {
    height: 100,
    width: 100,
    marginVertical: 20
  },
  button: {
    marginVertical: 20,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: 'pink',
    borderRadius: 5,
    fontWeight: '700'
  }
});

export default GameRules;
