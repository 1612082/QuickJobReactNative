import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import TextField from "../../Common/TextField";
import ButtonFormat from "../../Common/Button";
export default class Signup1 extends Component {
  constructor(props) {
    super(props);
    this.TouchInside = this.TouchInside.bind(this)

  }
  TouchInside() {
    this.props.navigation.navigate("Signup2");
  };
  render() {
    return (
      <View style={styles.container}>
        <TextField placeholder={" Email"}></TextField>
        <TextField placeholder={" Tên người dùng"}></TextField>
        <TextField placeholder={" Số điện thoại"} typekeyboard="numeric"></TextField>
        <ButtonFormat content={"TIẾP TỤC"} TouchInside={this.TouchInside}></ButtonFormat>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: Dimensions.get("window").height,
    overflow: "scroll"

  },
});
