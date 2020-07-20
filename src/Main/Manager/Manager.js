import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import ApplyingJob from "./Job/ApplyingJob";

// export default class Manager extends Component {
//   render() {
//     return (
//       <View>
//         <Text> Manager </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({});

// const FirstRoute = () => <PostJob style={styles.scene}></PostJob>;

// const SecondRoute = () => <ApplyingJob style={styles.scene}></ApplyingJob>;

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#ff4081" }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#673ab7" }]} />
);
const initialLayout = { width: Dimensions.get("window").width };

export default class Manager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: "first", title: "Đăng công việc" },
        { key: "second", title: "Phê duyệt công việc" },
      ],
    };
  }
  render() {
    let { index, routes } = this.state;
    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={(index) => this.setState({ index: index })}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
