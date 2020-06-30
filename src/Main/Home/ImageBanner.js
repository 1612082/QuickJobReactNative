import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Linking,
} from "react-native";

export default function ImageBanner(props) {
  const openLink = (url) => {
    console.log("a");
    Linking.openURL(url);
  };
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={openLink(props.item.link)}>
        <Image
          style={styles.img}
          source={{
            uri: props.item.source,
          }}
        ></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: Dimensions.get("window").width,
  },
  img: {
    width: Dimensions.get("window").width,
    height: 300,
  },
  btn: {
    

  },
});
