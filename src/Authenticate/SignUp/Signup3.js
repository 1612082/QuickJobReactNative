import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import TextField from "../../Common/TextField";
import ButtonFormat from "../../Common/Button";

export default class Signup3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextField placeholder={" Mật khẩu"} pass = {true}></TextField>
        <TextField placeholder={" Nhập lại mật khẩu"} pass = {true}></TextField>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        height: Dimensions.get("window").height,
    }
});
