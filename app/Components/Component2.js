import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from "react-native";

export default class component2 extends Component {
  handlePress() {
    console.log("Area Pressed");
  }
  render() {
    console.log("HELLO WORLD");
    return (
      <View>
        <View style={styles.myView}>
          <Text>Top Line</Text>
        </View>
        <Text style={styles.myText}>
          Hello World work this shit is component2
        </Text>
        <View style={styles.container}>
          <TouchableHighlight
            onPress={this.handlePress}
            style={styles.v1}
            underlayColor="red"
          >
            <View>
              <Text>V1</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.v2}>
            <Text>v2</Text>
          </View>
          <View style={styles.v3}>
            <Text>v3</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  myView: {
    backgroundColor: "pink"
  },
  myText: {
    color: "red"
  },
  container: {
    flexDirection: "row",
    height: 100
  },
  v1: {
    flex: 1,
    backgroundColor: "green",
    padding: 10
  },
  v2: {
    flex: 1,
    backgroundColor: "purple",
    padding: 10
  },
  v3: {
    flex: 1,
    backgroundColor: "orange",
    padding: 10
  }
});
AppRegistry.registerComponent("component2", () => component2);
