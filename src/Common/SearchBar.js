import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
export default function SearchBar(props) {
  return (
    <View style={styles.viewSearch}>
      <TextInput
        placeholder="  Tìm kiếm theo tên công việc"
        style={styles.search}
      ></TextInput>
      <Image
        source={require("../../assets/search.png")}
        style={styles.icon}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  viewSearch: {
    height: 50,
    flexDirection:"row",
    width:"80%",
    marginLeft:"5%"

  },
  search: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 15,
    borderRadius: 15,
  },
  icon: {
    left:"89%",
    top:"5%",
    height:30,
    width:30,
    position: 'absolute'
  },
});
