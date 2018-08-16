// @flow

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { API_HOST } from 'react-native-dotenv';

type Props = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>text</Text>
      </View>
    );
  }
}
