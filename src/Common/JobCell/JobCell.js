import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import ContentJobCell from "./ContentJobCell";
import { getImageSrc } from "../../helpers/helperFunctions";
// export default class JobCell extends Component {
//   constructor() {
//     super(props);
//     console.log(this);
//     this.onPressItem = this.onPressItem.bind(this);
//   }
//   onPressItem() {
//     // props.navigation.navigate(props.NameScreen);
//   }
//   render() {
//     return (
//         <View></View>
//   <TouchableOpacity style={styles.item} onPress={onPressItem}>
//     <Image
//       source={{
//         uri:
//           "https://www.open.edu/openlearn/sites/www.open.edu.openlearn/files/ole_images/become_a_student_inline.jpg",
//       }}
//       style={styles.logo}
//     />

//     <ContentJobCell item={this.props.item}></ContentJobCell>
//   </TouchableOpacity>
//     );
//   }
// }

export default function JobCell({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.item} onPress={() => onPress(item)}>
      <Image
        source={{
          uri: getImageSrc(item.img),
        }}
        style={styles.logo}
      />

      <ContentJobCell item={item}></ContentJobCell>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
  },
  item: {
    flexDirection: "row",
    margin: 20,
  },
});
