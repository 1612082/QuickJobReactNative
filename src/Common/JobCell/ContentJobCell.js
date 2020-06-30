import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

// export default class ContentJobCell extends Component {
//   constructor() {
//     super(props);

//   }
//   render() {
//     return (
// <View>
//   <Text style={styles.textTilte}>{props.item.title}</Text>
//   <Text style={styles.text}>{props.item.addr}</Text>
//   <Text style={styles.text}>{props.item.salary}</Text>
//   <Text style={styles.text}>{props.item.category}</Text>
// </View>
//     );
//   }
// }

export default function ContentJobCell({ item }) {
  return (
    <View style = {styles.content}>
      <Text style={styles.textTilte}>{item.title}</Text>
      <Text style={styles.text}>{item.addr}</Text>
      <Text style={styles.text}>{item.salary}</Text>
      <Text style={styles.textCate}>{item.category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textTilte: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 12,
  },
  text: {
    fontSize: 13,
    marginLeft:12,
    marginTop:12
  },
  textCate:{
    fontSize: 13,
    marginLeft:12,
    marginTop:12,
    color: "purple"
  },
  content:{
  }
});
