import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  SectionList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import SyncStorage from "sync-storage";
import axios from "../../../ultis/axios.default";
// import CompanyPlaceholder from "./company.png";
import { getImageSrc, prettierNumber } from "../../../helpers/helperFunctions";

export default class Applicant extends Component {
  constructor(props) {
    super(props);
    const { jobId } = this.props.route.params;

    this.state = {
      jobId: jobId,
      isLoadingApplicantsList: false,
      applicantsList: [],
      totalApplicants: 0,
      currentApplyingPage: 0,
    };
    this.handlePagination = this.handlePagination.bind(this);
  }
  componentDidMount() {
    let { currentApplyingPage } = this.state;
    this.getApplicants(currentApplyingPage);
  }

  getApplicants(page) {
    let { jobId } = this.state;
    this.setState({ isLoadingApplicantsList: true });
    axios
      .post("jobs/getJobsByEmployerIdForWeb", {
        id: jobId,
        page: page,
        take: 4,
        status: 0,
      })
      .then((res) => {
        this.setState({
          applicantsList: res.data.data.applicantsList,
          currentApplyingPage: res.data.data.page,
          totalApplicants: res.data.data.total,
          isLoadingApplicantsList: false,
        });
      })
      .catch((error) => {
        this.setState({ isLoadingApplicantsList: false });
        console.log(error);
      });
  }

  renderApplicant(item) {
    return (
      <View style={styles.jobItem}>
        <View style={styles.content}>
          <Text style={styles.textTilte}>asdasd</Text>
          <Text style={styles.text}>Số người cần tuyển: </Text>
        </View>
      </View>
    );
  }

  handlePagination(pageNum) {
    if (pageNum !== this.state.currentApplyingPage) {
      this.getApplicants(pageNum);
    }
  }

  renderPagination(page, totalPage) {
    let content = [];
    let start = 1,
      end = 4;
    if (totalPage - 4 < page) {
      if (totalPage - 4 < 0) {
        start = 1;
      } else {
        start = totalPage - 4;
      }
      end = totalPage;
    } else {
      start = page;
      end = page + 3;
    }

    for (let e = start; e <= end; e++) {
      content.push(
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "dodgerblue",
            marginRight: 10,
            paddingLeft: 5,
            paddingRight: 5,
          }}
          key={e}
          onPress={() => this.handlePagination(e)}
        >
          <Text>{e}</Text>
        </TouchableOpacity>
      );
    }
    return content;
  }

  render() {
    let {
      applicantsList,
      totalApplicants,
      currentApplyingPage,
      isLoadingApplicantsList,
    } = this.state;
    let totalPage = Math.ceil(totalApplicants / 4);
    let applicantsListData = [
      {
        title: "Danh sách ứng viên",
        data: applicantsList,
      },
    ];
    return (
      <ScrollView style={styles.container}>
        {isLoadingApplicantsList ? (
          <ActivityIndicator size="large" />
        ) : (
          <>
            <SectionList
              sections={applicantsListData}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => this.renderApplicant(item)}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
              )}
            />
            <View
              style={{
                flexDirection: "row",
                marginLeft: 20,
                // justifyContent: "space-evenly",
              }}
            >
              {this.renderPagination(currentApplyingPage, totalPage)}
            </View>
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
  scr: {
    height: 200,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 25,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
  jobItem: {
    flexDirection: "row",
    margin: 20,
  },
  textTilte: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 12,
  },
  text: {
    fontSize: 13,
    marginLeft: 12,
    marginTop: 12,
  },
  logo: {
    width: 100,
    height: 100,
  },
});
