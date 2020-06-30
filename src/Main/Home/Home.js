import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView, SectionList } from "react-native";
import ImageBanner from "./ImageBanner";
import JobCell from "../../Common/JobCell/JobCell"
const DATA = [
  {
    title: "Top 5 công việc thời vụ",
    data: [
        {
            title: "alibaba",
            addr:"30b con tê tê",
            salary:"10000VND",
            category:"thời vụ"
        }
    ],
  },
  {
    title: "Top 5 công việc giao sản phẩm",
    data: [{
        title: "alibaba",
        addr:"30b con tê tê",
        salary:"10000VND",
        category:"sản phẩm"
    }],
  },
  
];

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
    this.renderBannerItem = this.renderBannerItem.bind(this);
  }

  renderBannerItem(listBanner) {
    return listBanner.map((item) => (
      <ImageBanner
        // navigation={props.navigation}
        item={item}
      ></ImageBanner>
    ));
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <ScrollView horizontal={true} style={styles.scr}>
          {this.renderBannerItem(this.listBanner)}
        </ScrollView>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <JobCell item={item} />}
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
