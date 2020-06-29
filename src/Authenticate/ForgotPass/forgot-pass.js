import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ContentForgotPass from "./content-forgot-pass";
import OptionforgotPass from "./option-forgot-pass";


export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.screen}>
        <ContentForgotPass></ContentForgotPass>
        <OptionforgotPass></OptionforgotPass>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
});
