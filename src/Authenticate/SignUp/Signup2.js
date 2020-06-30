import React, { Component } from "react";
import { Text, StyleSheet, View,Dimensions } from "react-native";
import DatePicker from "react-native-datepicker";
import TextField from "../../Common/TextField";
import ButtonFormat from "../../Common/Button";
export default class Signup2 extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "2016-05-15" };
    this.TouchInside = this.TouchInside.bind(this);
  }
  TouchInside(){
    this.props.navigation.navigate("Signup3");
  };
  render() {
    return (
      <View style = {styles.container}>
        <Text style={{marginTop:40, margin:20, fontSize:20, fontWeight: "bold", textAlign:"center"}}>Bạn không bắt buộc phải điền các mục dưới đây nhưng nếu điền chúng bạn sẽ có cơ hội nhận dược việc cao hơn</Text>        
        <Text style={styles.text}>Ngày sinh</Text>
        <DatePicker
          style={{ width: 200, marginTop: 10, marginLeft: "5%", width:300 }}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="1900-05-01"
          maxDate="2005-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
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
          onDateChange={(date) => {
            this.setState({ date: date });
          }}
        />
        <Text style={styles.text}>Địa chỉ</Text>
        <TextField placeholder={" Thành phố"}></TextField>
        <TextField placeholder={" Quận/ Huyện"}></TextField>
        <TextField
          placeholder={" Phường/ Xã"}
          typekeyboard="numeric"
        ></TextField>
        <ButtonFormat content={"TIẾP TỤC"} TouchInside={this.TouchInside}></ButtonFormat>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent:"center",
    overflow:"scroll"
  },
  text: {
    marginTop: 20,
    marginBottom: 10,
    alignSelf: "center",
    fontSize: 20,
  },
});
