import React, { Component } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import { Text, StyleSheet, View, TouchableOpacity, Linking, KeyboardAvoidingView } from "react-native";

import TextField from "../../Common/TextField";
import { linkForgotPass } from "../../Global/string";
import Logo from "../../Common/Logo";
import ButtonFormat from "../../Common/Button";
import loginRequest from "../../apiAuth/tokenClient";

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
    this.props.navigation.navigate("Signup1");
  }
  TouchLogin() {
    const client = loginRequest;
    client
      .post('/login', {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        if (res.data.code === "-101") {
          // thất bại
          Alert.alert(res.data.message);
        } else {
          // thành công
          AsyncStorage.setItem("token", JSON.stringify(res.data.data.token));
          AsyncStorage.setItem("email", email);
          this.props.navigation.navigate("Home");
          // lấy thông tin user
          // getUserInfo().then(res => {
          //   if (res.data.code === '200') {
          //     dispatch(updateUser(res.data.data.personal))
          //     dispatch(success(res.data.message));
          //     this.props.navigation.navigate("Home");
          //   }
          //   else {
          //     Alert.alert('Lấy dữ liệu cá nhân thất bại.');
          //   }
          // }).catch(err => {
          //   console.log(err);
          // })
        }

      })
      .catch(error => {
        console.log(error);
      });
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
