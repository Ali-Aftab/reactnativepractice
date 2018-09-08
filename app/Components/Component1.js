import React, { Component } from "react";
import { AppRegistry, Text, View, StyleSheet } from "react-native";

export default class component1 extends Component {
  render() {
    return (
      <View>
        <Text>Hello World work this shit is component1</Text>
      </View>
    );
  }
}
AppRegistry.registerComponent("component1", () => component1);
