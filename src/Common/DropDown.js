import React from "react";
import { StyleSheet, TextInput, View, Image } from "react-native";

export default function DropDown(props) {
  return (
    <View style={styles.viewSearch}>
      <TextInput
        placeholder={props.placeholder}
        style={styles.search}
      ></TextInput>
      <Image
        source={require("../../assets/downarrow.png")}
        style={styles.icon}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
    viewSearch: {
        height: 50,
        flexDirection:"row",
        width:"90%",
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
