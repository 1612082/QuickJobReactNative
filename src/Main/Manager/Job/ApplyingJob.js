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
import JobCell from "../../../Common/JobCell/JobCell";
import SyncStorage from "sync-storage";
import axios from "../../../ultis/axios.default";
// import CompanyPlaceholder from "./company.png";
import { getImageSrc, prettierNumber } from "../../../helpers/helperFunctions";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingApplyingJobsList: false,
      applyingJobsList: [],
      totalApplyingJobs: 0,
      currentApplyingPage: 0,
    };
    this.selectJob = this.selectJob.bind(this);
    this.handlePagination = this.handlePagination.bind(this);
  }
  componentDidMount() {
    let { currentApplyingPage } = this.state;
    this.getJobs(currentApplyingPage);
  }

  getJobs(page) {
    this.setState({ isLoadingApplyingJobsList: true });
    axios
      .post("jobs/getJobsByEmployerIdForWeb", {
        page: page,
        take: 4,
        isASC: 1,
        status: 1,
      })
      .then((res) => {
        this.setState({
          applyingJobsList: res.data.data.jobList,
          currentApplyingPage: res.data.data.page,
          totalApplyingJobs: res.data.data.total,
          isLoadingApplyingJobsList: false,
        });
      })
      .catch((error) => {
        this.setState({ isLoadingApplyingJobsList: false });
        console.log(error);
      });
  }

  selectJob(job) {
    this.props.navigation.navigate("JobDetail", {
      jobId: job.id_job,
    });
  }

  renderJob(item) {
    let logo = "./company.png";
    if (item.imgs != null && item.imgs.length !== 0) {
      logo = getImageSrc(item.imgs[0]);
    }
    return (
      <TouchableOpacity
        style={styles.jobItem}
        onPress={() => this.selectJob(item)}
      >
        <Image
          source={{
            uri: logo,
          }}
          style={styles.logo}
        />

        <View style={styles.content}>
          <Text style={styles.textTilte}>{item.title}</Text>
          <Text style={styles.text}>Số người cần tuyển: {item.vacancy}</Text>
          <Text style={styles.text}>
            Số người đã tuyển: {item.participants}
          </Text>
          <Text style={styles.text}>
            Số người đang đăng kí: {item.candidates}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  handlePagination(pageNum) {
    if (pageNum !== this.state.currentApplyingPage) {
      this.getJobs(pageNum);
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
      applyingJobsList,
      totalApplyingJobs,
      currentApplyingPage,
      isLoadingApplyingJobsList,
    } = this.state;
    let totalPage = Math.ceil(totalApplyingJobs / 4);
    let applyingJobsListData = [
      {
        title: "Danh sách công việc đang tuyển",
        data: applyingJobsList,
      },
    ];
    return (
      <ScrollView style={styles.container}>
        {isLoadingApplyingJobsList ? (
          <ActivityIndicator size="large" />
        ) : (
          <>
            <SectionList
              sections={applyingJobsListData}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => this.renderJob(item)}
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

              {/* <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: "dodgerblue",
                  marginRight: 10,
                }}
              >
                <Text>Hhihihi </Text>
              </TouchableOpacity> */}
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
