import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
export default function SearchBar(props) {
  return (
    <View style={styles.viewSearch}>
      <TextInput
        placeholder="Tìm kiếm theo tên công việc"
        style={styles.search}
        onChangeText={(text) => props.onChangeText(text)}
      ></TextInput>
      <TouchableOpacity style={styles.icon} onPress={() => props.searchClick()}>
        <Image
          source={require("../../assets/search.png")}
          style={styles.image}
        ></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewSearch: {
    height: 50,
    flexDirection: "row",
    width: "90%",
    marginLeft: "5%",
  },
  search: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 15,
    borderRadius: 15,
    paddingLeft: 10,
  },
  icon: {
    left: "89%",
    top: "5%",
    height: 30,
    width: 30,
    position: "absolute",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
