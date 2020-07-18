import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
const { width, height } = Dimensions.get("window");

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = "Hồ sơ chưa xác thực";
    this.id = "123456";
    this.name = "Nguyễn Hồng Đăng";
    this.DetailProfile = this.DetailProfile.bind(this);
  }
  DetailProfile() {
    this.props.navigation.navigate("DetailProfile");
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.viewDetail}>
          <Text style={styles.lable}>Hồ sơ cá nhân</Text>
          <TouchableOpacity
            style={styles.btnDetail}
            onPress={this.DetailProfile}
          >
            <Text style={styles.btn}>Chi tiết</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sumary}>
          <Image
            style={styles.img}
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAArHbV6gqS70hTQBiPnvI-mRMZw85ItexDw&usqp=CAU",
            }}
          />
          <View>
            <Text style={styles.textName}>{this.name}</Text>
            <Text style={styles.textState}> {this.state}</Text>
            <Text style={styles.textId}> ID: {this.id} </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
  },
  imgView: {
    height: 200,
    width: Dimensions.get("window").width,
    alignItems: "stretch",
  },
  img: {
    height: 100,
    width: 100,
    marginLeft: 12,
  },
  sumary: {
    flexDirection: "row",
  },
  lable: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 12,
    flex: 6.5,
  },
  textName: {
    fontSize: 22,
    marginLeft: 12,
  },
  textState: {
    fontSize: 20,
    marginLeft: 12,
    marginTop: 12,
    color: "red",
  },
  textId: {
    fontSize: 20,
    marginLeft: 12,
    marginTop: 12,
  },
  btnDetail: {
    marginRight: 12,
    marginTop: 20,
    // backgroundColor:"red",
    flex: 1,
    height: 25,
  },
  viewDetail: {
    flexDirection: "row",
  },
  btn: {
    color: "blue",
    fontSize: 15,
  },
});
