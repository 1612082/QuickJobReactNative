import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView, SectionList } from "react-native";
import ImageBanner from "./ImageBanner";
import JobCell from "../../Common/JobCell/JobCell"
import SyncStorage from "sync-storage";
import axios from "../../ultis/axios.default"



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.listBanner = [
      {
        id: "2",
        link: "https://gearvn.com/pages/pc-gvn-t6",
        source:
          "https://theme.hstatic.net/1000026716/1000440777/14/slideshow_1.jpg?v=12549",
      },
      {
        id: "1",
        link: "https://gearvn.com/pages/man-hinh-summer-super-sale",
        source:
          "https://theme.hstatic.net/1000026716/1000440777/14/slideshow_4.jpg?v=12549",
      },
    ];
    this.state = {
      productionJobs: [],
      temporalJobs: []
    }
    this.renderBannerItem = this.renderBannerItem.bind(this);
    this.getJobs();
  }

  getJobs() {
    // get temporal jobs
    query = {
      job_type: '0',
    }
    axios
      .post('getJobsList', {
        page: 1,
        take: 5,
        isASC: 1,
        query: query,
      })
      .then(res => {
        this.setState({ temporalJobs: res.data.data.jobList });
      })
      .catch(error => {
        console.log(error);
      });
    // get production jobs
    let query = {
      job_type: '1',
    }
    axios
      .post('getJobsList', {
        page: 1,
        take: 5,
        isASC: 1,
        query: query,
      })
      .then(res => {
        this.setState({ productionJobs: res.data.data.jobList });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderBannerItem(listBanner) {
    return listBanner.map((item, index) => (
      <ImageBanner
        // navigation={props.navigation}
        item={item}
        key={index}
      ></ImageBanner>
    ));
  }

  selectJob(job) {
    this.props.navigation.navigate('JobDetail', {
      jobId: 86,
    });
  }

  render() {
    let { productionJobs, temporalJobs } = this.state;
    let DATA = [
      {
        title: "Top 5 công việc thời vụ",
        data: temporalJobs,
      },
      {
        title: "Top 5 công việc giao sản phẩm",
        data: productionJobs,
      },

    ];
    return (
      <ScrollView style={styles.container}>
        <ScrollView horizontal={true} style={styles.scr}>
          {this.renderBannerItem(this.listBanner)}
        </ScrollView>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <JobCell item={item} onPress={() => this.selectJob(item)} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
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
    marginVertical: 8
  },
  header: {
    fontSize: 25,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  },
});
