import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions, ScrollView } from "react-native";
import TextField from "../../Common/TextField";
import SearchBar from "../../Common/SearchBar";
import Filter from "../../Common/Filter";
import DropDown from "../../Common/DropDown";
import JobCell from "../../Common/JobCell/JobCell"
export default class Search extends Component {
  render() {
    const resultSearch = [
        {
            title: "alibaba",
            addr:"30b con tê tê",
            salary:"10000VND",
            category:"thời vụ"
        },
        {
            title: "alibaba",
            addr:"30b con tê tê",
            salary:"10000VND",
            category:"thời vụ"
        },
        {
            title: "alibaba",
            addr:"30b con tê tê",
            salary:"10000VND",
            category:"thời vụ"
        },
        {
            title: "alibaba",
            addr:"30b con tê tê",
            salary:"10000VND",
            category:"thời vụ"
        },
        {
            title: "alibaba",
            addr:"30b con tê tê",
            salary:"10000VND",
            category:"thời vụ"
        }
    ]
    const renderJobItem = (courses) => {
        return courses.map(item => <JobCell item = {item}></JobCell>);
    }
    return (
      <View style={styles.container}>
        {/* <Text>asdf</Text> */}
        <View style={styles.viewSearchName}>
          <SearchBar placeholder={" Email"}></SearchBar>
          <Filter></Filter>
        </View>
        <View style = {styles.viewSearchAddr}>
            <DropDown placeholder = {"  Tìm kiếm theo thành phố"}></DropDown>
        </View>
        <View style = {styles.viewReswult}>
            <ScrollView style = {styles.scrView}>
            {renderJobItem(resultSearch)}
            </ScrollView>
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
    marginTop:5
  },
  viewSearchAddr:{
    height: 50,
    marginTop:0
  },
  viewReswult:{
    marginTop:0,
    marginBottom:230,
  },
  scrView:{
  }
});
