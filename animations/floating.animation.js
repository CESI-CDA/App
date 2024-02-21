import React, { Component } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

export default class FloatingAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translateY: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.translateY, {
          toValue: -15,
          duration: 3000, // Durée de 3 secondes pour monter
          useNativeDriver: true,
        }),
        Animated.timing(this.state.translateY, {
          toValue: 0,
          duration: 3000, // Durée de 3 secondes pour descendre
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: -1, // Infinite loop
      }
    ).start();
  };

  render() {
    const { translateY } = this.state;

    return (
      <Animated.View
        style={[
          styles.box,
          {
            transform: [{ translateY }],
          },
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,

  },
});
