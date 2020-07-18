import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Picker,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import TextField from "../../Common/TextField";
import ButtonFormat from "../../Common/Button";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import RNPickerSelect from "react-native-picker-select";
import axios from "../../ultis/axios.default";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {
        fullname: "",
        dob: new Date(),
        email: "",
        password: "",
        dial: "",
        address: "",
        isBusinessUser: 0,
        gender: 1,
        confirm: "",
      },
      isShow: false,
      errors: false,
      message: "",
    };
    this.SelectDoB = this.SelectDoB.bind(this);
    this.onGoToStepTwo = this.onGoToStepTwo.bind(this);
    this.onRegister = this.onRegister.bind(this);
  }
  SelectDoB() {
    this.setState({ isShow: true });
  }
  onGoToStepTwo() {
    let { account } = this.state;
    //Kiem tra nhap gia tri chua
    if (account.email == "") {
      this.setState({ errors: true, message: "Vui lòng nhập email" });
    } else if (account.fullname == "") {
      this.setState({ errors: true, message: "Vui lòng nhập tên người dùng" });
    } else if (account.dial == "") {
      this.setState({ errors: true, message: "Vui lòng nhập số điện thoại" });
    } else if (account.address == "") {
      this.setState({ errors: true, message: "Vui lòng nhập địa chỉ" });
    } else {
      //Kiem tra dinh dang email
      let lastAtPos = account.email.lastIndexOf("@");
      let lastDotPos = account.email.lastIndexOf(".");
      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          account.email.indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          account.email.length - lastDotPos > 2
        )
      ) {
        this.setState({ errors: true, message: "Email không đúng định dạng" });
      } else this.setState({ errors: false, message: "" });
    }
  }

  onRegister() {
    let { account } = this.state;
    //Kiem tra nhap gia tri chua
    if (account.password == "") {
      this.setState({ errors: true, message: "Vui lòng nhập mật khẩu" });
    } else if (account.confirm == "") {
      this.setState({
        errors: true,
        message: "Vui lòng nhập xác định mật khẩu",
      });
    } else if (account.password != account.confirm) {
      this.setState({
        errors: true,
        message: "Xác nhận mật khẩu không khớp",
      });
    } else {
      //Kiem tra dinh dang email
      this.setState({ errors: false, message: "" });
      //send register
      axios
        .post("signup", {
          ...account,
        })
        .then((res) => {
          if (res.data.code === "-103") {
            // thất bại
            Alert.alert(
              "Đăng kí tài khoản thất bại",
              res.data.message === "Email is already used"
                ? "Email đã được sử dụng"
                : res.data.message
            );
          } else {
            // thành công
            Alert.alert(
              "Đăng kí tài khoản thành công",
              "Vui lòng vào email xác thực tài khoản để sử dụng",
              [
                {
                  text: "OK",
                  onPress: () => {
                    this.props.navigation.navigate("Login");
                  },
                },
              ],
              { cancelable: false }
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  render() {
    return (
      <ProgressSteps>
        <ProgressStep
          label="Bước 1"
          nextBtnText="Tiếp theo"
          onNext={this.onGoToStepTwo}
          errors={this.state.errors}
        >
          <View style={styles.container}>
            <KeyboardAvoidingView behavior="position">
              <TextField
                defaultValue={this.state.account.email}
                onChangeText={(text) => {
                  let { account } = this.state;
                  account = {
                    ...account,
                    email: text,
                  };
                  this.setState({
                    account: account,
                  });
                }}
                placeholder={"Email"}
              ></TextField>
              <TextField
                defaultValue={this.state.account.fullname}
                onChangeText={(text) => {
                  let { account } = this.state;
                  account = {
                    ...account,
                    fullname: text,
                  };
                  this.setState({
                    account: account,
                  });
                }}
                placeholder={"Tên người dùng"}
              ></TextField>
              <TextField
                defaultValue={this.state.account.dial}
                onChangeText={(text) => {
                  let { account } = this.state;
                  account = {
                    ...account,
                    dial: text,
                  };
                  this.setState({
                    account: account,
                  });
                }}
                placeholder={"Số điện thoại"}
                typekeyboard="numeric"
              ></TextField>
              <TextField
                defaultValue={this.state.account.address}
                onChangeText={(text) => {
                  let { account } = this.state;
                  account = {
                    ...account,
                    address: text,
                  };
                  this.setState({
                    account: account,
                  });
                }}
                placeholder={"Địa chỉ"}
              ></TextField>
              {this.state.errors ? (
                <Text style={styles.errorMessage}>{this.state.message}</Text>
              ) : (
                <></>
              )}
            </KeyboardAvoidingView>
          </View>
        </ProgressStep>
        {/* <ProgressStep
          label="Bước 2"
          nextBtnText="Tiếp theo"
          previousBtnText="Trở về"
        >
          <View style={styles.container}>
            <KeyboardAvoidingView behavior="position">
              <ButtonFormat
                content={"CHỌN NGÀY SINH"}
                TouchInside={() => this.SelectDoB()}
              ></ButtonFormat>
              {this.state.isShow ? (
                <DateTimePicker
                  style={{
                    width: 200,
                    marginTop: 10,
                    marginLeft: "5%",
                    width: 300,
                  }}
                  value={this.state.account.dob || new Date()}
                  mode="date"
                  placeholder="Chọn ngày sinh"
                  format="YYYY-MM-DD"
                  minDate="1900-05-01"
                  maxDate="2005-06-01"
                  confirmBtnText="Ok"
                  cancelBtnText="Hủy bỏ"
                  customStyles={{
                    dateIcon: {
                      position: "absolute",
                      left: 0,
                      top: 4,
                      marginLeft: 0,
                    },
                    dateInput: {
                      marginLeft: 36,
                    },
                    // ... You can check the source to find the other keys.
                  }}
                  onChange={(date) => {
                    let { account } = this.state;
                    account = {
                      ...account,
                      dob: date,
                    };
                    this.setState({
                      account: account,
                      isShow: false,
                    });
                  }}
                />
              ) : (
                <></>
              )}
              <Text></Text>
              <Picker
                selectedValue={this.state.account.gender.toString()}
                style={{ width: "80%", alignSelf: "center" }}
                onValueChange={(itemValue) => {
                  let { account } = this.state;
                  account = {
                    ...account,
                    gender: itemValue == "1" ? 1 : 0,
                  };
                  console.log(account);
                  this.setState({
                    account: account,
                  });
                }}
              >
                {" "}
                <Picker.Item label="Nam" value="1" />
                <Picker.Item label="Nữ" value="0" />
              </Picker>
            </KeyboardAvoidingView>
          </View>
        </ProgressStep> */}
        <ProgressStep
          label="Bước 2"
          finishBtnText="Đăng ký"
          previousBtnText="Trở về"
          onSubmit={this.onRegister}
          onPrevious={() => {
            this.setState({ errors: false, message: "" });
          }}
        >
          <View style={styles.container}>
            <KeyboardAvoidingView behavior="position">
              <TextField
                onChangeText={(text) => {
                  let { account } = this.state;
                  account = {
                    ...account,
                    password: text,
                  };
                  this.setState({
                    account: account,
                  });
                }}
                placeholder={"Mật khẩu"}
                pass={true}
              ></TextField>
              <TextField
                onChangeText={(text) => {
                  let { account } = this.state;
                  account = {
                    ...account,
                    confirm: text,
                  };
                  this.setState({
                    account: account,
                  });
                }}
                placeholder={"Nhập lại mật khẩu"}
                pass={true}
              ></TextField>
              {this.state.errors ? (
                <Text style={styles.errorMessage}>{this.state.message}</Text>
              ) : (
                <></>
              )}
            </KeyboardAvoidingView>
          </View>
        </ProgressStep>
      </ProgressSteps>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    overflow: "scroll",
  },
  text: {
    marginTop: 20,
    marginBottom: 10,
    alignSelf: "center",
    fontSize: 20,
  },
  errorMessage: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 40,
    alignSelf: "flex-end",
    fontSize: 16,
    color: "red",
  },
  picker: {
    marginLeft: 20,
    marginRight: 20,
    alignSelf: "center",
    fontSize: 20,
  },
});
