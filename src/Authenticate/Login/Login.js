import React, { Component } from "react";
import SyncStorage from "sync-storage";
import { Text, StyleSheet, View, TouchableOpacity, Linking, KeyboardAvoidingView, Alert } from "react-native";

import TextField from "../../Common/TextField";
import { linkForgotPass } from "../../Global/string";
import Logo from "../../Common/Logo";
import ButtonFormat from "../../Common/Button";
import axios from "../../ultis/axios.default"

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
    this.TouchSignup = this.TouchSignup.bind(this);
    this.TouchLogin = this.TouchLogin.bind(this);
  }
  TouchSignup() {
    this.props.navigation.navigate("Signup");
  }
  TouchLogin() {
    this.props.navigation.navigate("Home");
     
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <Logo></Logo>
          <TextField
            placeholder={" Email"}
            onChangeText={(text) => {
              this.setState({ email: text });
            }}
          ></TextField>
          <TextField
            placeholder={" Mật khẩu"}
            pass={true}
            onChangeText={(text) => {
              this.setState({ password: text });
            }}
          ></TextField>
          <ButtonFormat
            content={"ĐĂNG NHẬP"}
            TouchInside={this.TouchLogin}
          ></ButtonFormat>
          <ButtonFormat
            content={"ĐĂNG KÝ"}
            TouchInside={this.TouchSignup}
          ></ButtonFormat>
          <TouchableOpacity style={styles.touch} onPress={() => { Linking.openURL(linkForgotPass) }}>
            <Text style={styles.underline}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  touch: {
    alignItems: "center",
  },
  underline: {
    textDecorationLine: "underline",
    fontSize: 15,
    marginTop: 20,
    color: "blue",
  },
});
