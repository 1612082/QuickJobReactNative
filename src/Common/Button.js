import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ButtonFormat = (props) => {
  // const TouchInside = () => {};
  return (
    <TouchableOpacity style={styles.moreOption} onPress={props.TouchInside}>
      <Text style={styles.textOption}>{props.content}</Text>
    </TouchableOpacity>
  );
};

export default ButtonFormat;

const styles = StyleSheet.create({
  moreOption: {
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "dodgerblue",
    borderRadius: 15,
    justifyContent: "center",
  },
  textOption: {
    fontSize: 20,
    textAlign: "center",
    color: "dodgerblue",
  },
});
