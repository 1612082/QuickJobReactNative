import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import TextField from "../../Common/TextField";
import { linkBackground } from "../../Global/string";
import Logo from "../../Common/Logo";
import ButtonFormat from "../../Common/Button";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.TouchInside = this.TouchInside.bind(this)

  }
  TouchInside(){
    this.props.navigation.navigate("Signup1");
  };

  render() {
    

    return (
      <View style={styles.container}>
        <Logo></Logo>
        <TextField placeholder={this.props.test}></TextField>
        <TextField placeholder={" Mật khẩu"} pass={true}></TextField>
        <ButtonFormat content={"ĐĂNG NHẬP"}></ButtonFormat>
        <ButtonFormat
          content={"ĐĂNG KÝ"}
          TouchInside={this.TouchInside}
        ></ButtonFormat>
        <TouchableOpacity style={styles.touch}>
          <Text style={styles.underline}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// const Login = (props) => {
//   const TouchInside = () => {
//     props.navigation.navigate("Signup1");
//   };
//   return (
//     <View>
//       <Logo></Logo>
//       <TextField placeholder={props.test}></TextField>
//       <TextField placeholder={" Mật khẩu"} pass={true}></TextField>
//       <ButtonFormat content={"ĐĂNG NHẬP"}></ButtonFormat>
//       <ButtonFormat
//         content={"ĐĂNG KÝ"}
//         TouchInside={TouchInside}
//       ></ButtonFormat>
//       <TouchableOpacity style={styles.touch}>
//         <Text style={styles.underline}>Quên mật khẩu?</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Login;

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
