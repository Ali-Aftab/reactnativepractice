import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";
import App from "./App";
import Component2 from "./app/Components/Component2";

export default class newapp extends Component {
  render() {
    return (
      <View>
        <Component2 />
      </View>
    );
  }
}
AppRegistry.registerComponent("newapp", () => newapp);
