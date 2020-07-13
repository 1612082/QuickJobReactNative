import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions, KeyboardAvoidingView } from "react-native";
import TextField from "../../Common/TextField";
import ButtonFormat from "../../Common/Button";

export default class Signup3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <TextField placeholder={" Mật khẩu"} pass={true}></TextField>
          <TextField placeholder={" Nhập lại mật khẩu"} pass={true}></TextField>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    // height: Dimensions.get("window").height,
    overflow: "scroll",
    flex: 1
  }
});
