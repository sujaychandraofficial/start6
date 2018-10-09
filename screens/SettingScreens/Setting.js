import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  static navigationOptions = {
    header: null,
    title: 'Welcome',
};
  render() {
    return (
      <View>
        <Text>Setting</Text>
      </View>
    );
  }
}
