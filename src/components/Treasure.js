import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

class GameRules extends Component {
  render() {
    const { onClose } = this.props;

    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.heading]}>You Found Him!</Text>

        <View style={styles.imageContainer}>
          <Image
            style={[styles.unicorn]}
            source={require('../../assets/images/unicorn.png')} />

          <Image
            style={[styles.unicorn]}
            source={require('../../assets/images/treasure.png')} />
        </View>

        <Text style={styles.text}>You are rewarded with his treasure.</Text>

        <TouchableOpacity onPress={onClose}>
          <Text style={[styles.text,styles.button]}>SEARCH AGAIN</Text>
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
    backgroundColor: "#5d4776",
  },
  imageContainer: {
    flexDirection: 'row'
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
