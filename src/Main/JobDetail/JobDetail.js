import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Image,
} from "react-native";
import TextField from "../../Common/TextField";
import ButtonFormat from "../../Common/Button";
import axios from "../../ultis/axios.default";
import {
  getImageSrc,
  prettierNumber,
  prettierDate,
} from "../../helpers/helperFunctions";

export default class JobDetail extends Component {
  constructor(props) {
    super(props);
    const { jobId } = this.props.route.params;
    this.state = {
      jobId: jobId,
      jobDetail: null,
      isLoading: false,
    };
  }
  componentWillMount() {
    let { jobId } = this.state;
    this.setState({ isLoading: true });
    axios
      .get("/getJobById/" + jobId)
      .then((res) => {
        this.setState({ isLoading: false });
        if (res.data.data.id_job) {
          this.setState({ jobDetail: res.data.data });
        } else {
          Alert.alert("not-found");
        }
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        console.log(err);
      });
  }

  renderDealers(dealers) {
    let content = [];
    dealers.forEach((dealer, index) => {
      content.push(
        <Text style={styles.descriptionOption} key={index}>
          {dealer.fullname}: {prettierNumber(dealer.proposed_price)} VNĐ
        </Text>
      );
    });
    return content;
  }

  render() {
    let { jobDetail, isLoading } = this.state;
    return (
      <ScrollView style={styles.container}>
        {jobDetail == null || isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <>
            <Image
              style={styles.logo}
              source={{
                uri: jobDetail.imgs[0]
                  ? getImageSrc(jobDetail.imgs[0])
                  : "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.dropque.com%2Flisting&psig=AOvVaw2HZXnPGvjQ0ZYXiVIr2-t0&ust=1594786632615000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCjyqnxy-oCFQAAAAAdAAAAABAD",
              }}
            />
            <Text style={styles.titleOption}>{jobDetail.title}</Text>
            <Text style={styles.captionTitleOption}>Tổng quát:</Text>
            <Text style={styles.descriptionOption}>
              Mô tả: {jobDetail.description}
            </Text>
            <Text style={styles.descriptionOption}>
              Địa chỉ: {jobDetail.address}
            </Text>
            <Text style={styles.descriptionOption}>
              Thù lao: {prettierNumber(jobDetail.salary)} VNĐ
            </Text>
            <Text style={styles.descriptionOption}>
              Số lượng cần tuyển: {jobDetail.vacancy} người
            </Text>
            <Text style={styles.captionTitleOption}>Thông tin người thuê:</Text>
            <Text style={styles.descriptionOption}>
              Họ tên: {jobDetail.name_employer}
            </Text>
            <Text style={styles.descriptionOption}>
              Email: {jobDetail.email}
            </Text>
            <Text style={styles.descriptionOption}>
              Điện thoại: {jobDetail.dial}
            </Text>
            <Text style={styles.captionTitleOption}>Thông tin thêm:</Text>
            <Text style={styles.descriptionOption}>
              Chủ đề: {jobDetail.topic_name}
            </Text>
            {jobDetail.requirement ? (
              <Text style={styles.descriptionOption}>
                Yêu cầu thêm: {jobDetail.requirement}
              </Text>
            ) : (
              <></>
            )}
            {jobDetail.benefit ? (
              <Text style={styles.descriptionOption}>
                Quyền lợi: {jobDetail.benefit}
              </Text>
            ) : (
              <></>
            )}
            <Text style={styles.propertyOption}>
              {jobDetail.dealable ? "Đấu giá" : "Không cần đấu giá"},{" "}
              {jobDetail.job_type ? "Thời vụ" : "Sản phẩm"},{" "}
              {jobDetail.isOnline ? "Online" : "Offline"},{" "}
              {jobDetail.isCompany ? "Công ty" : "Cá nhân"}
            </Text>
            {jobDetail.dealers.length > 0 ? (
              <>
                <Text style={styles.captionTitleOption}>
                  Danh sách đấu giá:
                </Text>
                {this.renderDealers(jobDetail.dealers)}
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    left: 0,
    right: 0,
    height: 250,
  },
  bottomButton: {
    height: 40,
    bottom: 0,
    left: 0,
    justifyContent: "center",
  },
  titleOption: {
    fontSize: 25,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
  },
  descriptionOption: {
    fontSize: 18,
    textAlign: "left",
    color: "black",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
  },
  captionTitleOption: {
    fontSize: 23,
    textAlign: "left",
    color: "black",
    fontWeight: "bold",
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
    backgroundColor: "#e0e0eb",
  },
  propertyOption: {
    fontSize: 18,
    textAlign: "left",
    color: "blue",
    fontStyle: "italic",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
  },
});
