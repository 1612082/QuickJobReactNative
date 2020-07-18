import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  SectionList,
  ActivityIndicator,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import TextField from "../../Common/TextField";
import ButtonFormat from "../../Common/Button";
import axios from "../../ultis/axios.default";
import SyncStorage from "sync-storage";
import { prettierNumber } from "../../helpers/helperFunctions";

export default class ApplyForm extends Component {
  constructor(props) {
    super(props);
    const { jobId, salary, dealable } = this.props.route.params;
    this.state = {
      jobId: jobId,
      salary: salary,
      dealable: dealable,
      proposed_price: 0,
      introduction_string: "",
      isSending: false,
      message: "",
    };
    this.ApplyJob = this.ApplyJob.bind(this);
  }

  ApplyJob() {
    //check input
    let {
      jobId,
      salary,
      dealable,
      proposed_price,
      introduction_string,
    } = this.state;
    if (!dealable) proposed_price = salary;
    if (proposed_price == 0) {
      this.setState({ message: "Vui lòng nhập lương mong muốn" });
      return;
    }
    if (introduction_string == "") {
      this.setState({
        message: "Vui lòng nhập vài lời tự giới thiệu",
      });
      return;
    }

    if (proposed_price > salary) {
      this.setState({
        message:
          "Lương mong muốn không được lớn hơn " +
          prettierNumber(salary) +
          " VNĐ",
      });
      return;
    }
    if (proposed_price < salary / 2) {
      this.setState({
        message:
          "Lương mong muốn không được nhỏ hơn " +
          prettierNumber(salary / 2) +
          " VNĐ",
      });
      return;
    }

    //OK, send
    this.setState({ message: "" });
    let user = JSON.parse(SyncStorage.get("user"));
    this.setState({ isSending: true });
    axios
      .post("applicants/addApplicant", {
        id_user: user.id_user,
        id_job: jobId,
        proposed_price: proposed_price,
        attachment: "",
        introduction_string: introduction_string,
      })
      .then((res) => {
        this.setState({ isSending: false });
        Alert.alert(
          "Thành công",
          "Đăng kí ứng tuyển thành công, vui lòng đợi duyệt",
          [
            {
              text: "OK",
              onPress: () => {
                this.props.route.params.reloadData();
                this.props.navigation.goBack();
              },
            },
          ],
          { cancelable: false }
        );
      })
      .catch((error) => {
        this.setState({ isSending: false });
        console.log(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <Text></Text>
          {this.state.dealable ? (
            <TextField
              placeholder={"Lương mong muốn (VNĐ)"}
              typekeyboard="numeric"
              onChangeText={(text) => {
                this.setState({ proposed_price: text });
              }}
            ></TextField>
          ) : (
            <></>
          )}
          <TextField
            placeholder={"Đôi lời tự giới thiệu"}
            onChangeText={(text) => {
              this.setState({ introduction_string: text });
            }}
          ></TextField>
          {this.state.isSending ? <ActivityIndicator size="large" /> : <></>}
          {this.state.message != "" ? (
            <Text style={styles.errorMessage}>{this.state.message}</Text>
          ) : (
            <></>
          )}
          <ButtonFormat
            content={"ĐĂNG KÍ ỨNG TUYỂN"}
            TouchInside={this.ApplyJob}
          ></ButtonFormat>
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
  errorMessage: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 40,
    alignSelf: "flex-end",
    fontSize: 13,
    color: "red",
  },
});
