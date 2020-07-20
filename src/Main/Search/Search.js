import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import TextField from "../../Common/TextField";
import SearchBar from "../../Common/SearchBar";
import Filter from "../../Common/Filter";
import DropDown from "../../Common/DropDown";
import JobCell from "../../Common/JobCell/JobCell";
import axios from "../../ultis/axios.default";
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobList: [],
      page: 1,
      total: 0,
      isSending: false,
      searchText: "",
    };
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    let { page } = this.state;
    this.getJobs(page);
  }

  onSearch() {
    this.setState({ page: 1 });
    this.getJobs(1);
  }

  getJobs(page) {
    let query = { title: this.state.searchText };
    this.setState({ isSending: true });
    axios
      .post("getJobsList", {
        page: page,
        take: 8,
        isASC: 1,
        query: query,
      })
      .then((res) => {
        this.setState({
          jobList: res.data.data.jobList,
          page: res.data.data.page,
          total: res.data.data.total,
          isSending: false,
        });
      })
      .catch((error) => {
        this.setState({ isSending: false });
        console.log(error);
      });
  }

  handlePagination(pageNum) {
    if (pageNum !== this.state.page) {
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
  selectJob(job) {
    this.props.navigation.navigate("JobDetail", {
      jobId: job.id_job,
    });
  }

  render() {
    let { jobList, page, total, isSending } = this.state;
    let totalPage = Math.ceil(total / 8);
    const renderJobItem = (courses) => {
      return courses.map((item, index) => (
        <JobCell
          item={item}
          key={index}
          onPress={() => this.selectJob(item)}
        ></JobCell>
      ));
    };
    return (
      <View style={styles.container}>
        <View style={styles.viewSearchName}>
          <SearchBar
            placeholder={"Email"}
            onChangeText={(text) => this.setState({ searchText: text })}
            searchClick={() => this.onSearch()}
          ></SearchBar>
          {/* <Filter></Filter> */}
        </View>
        {/* <View style={styles.viewSearchAddr}>
          <DropDown placeholder={"  Tìm kiếm theo thành phố"}></DropDown>
        </View> */}
        <View style={styles.viewReswult}>
          {isSending ? (
            <ActivityIndicator size="large" />
          ) : (
            <ScrollView style={styles.scrView}>
              {renderJobItem(jobList)}
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 20,
                  // justifyContent: "space-evenly",
                }}
              >
                {this.renderPagination(page, totalPage)}
              </View>
            </ScrollView>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
  },
  viewSearchName: {
    height: 50,
    flexDirection: "row",
    marginTop: 5,
  },
  viewSearchAddr: {
    height: 50,
    marginTop: 0,
  },
  viewReswult: {
    marginTop: 0,
    marginBottom: 230,
  },
  scrView: {},
});
