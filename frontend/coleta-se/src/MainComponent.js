import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
      }
    });
    return (
      <View style={styles.container}>
        <Text>Ola</Text>
      </View>
    );
  }
}
