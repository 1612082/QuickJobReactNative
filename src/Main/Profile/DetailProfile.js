// import React, { Component } from "react";
// import { Text, StyleSheet, View, Image, Dimensions, ScrollView } from "react-native";
// const { width, height } = Dimensions.get('window');

// export default class DetailProfile extends Component {
//   render() {
//     return (
//       <ScrollView style={styles.container}>
//         <View style={styles.imgView}>
//           <Image
//             style={styles.img}
//             source={{
//               uri:
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAArHbV6gqS70hTQBiPnvI-mRMZw85ItexDw&usqp=CAU",
//             }}
//           ></Image>
//         </View>
//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     height: Dimensions.get("window").height,
//   },
//   imgView: {
//     height: 200,
//     width: Dimensions.get("window").width,
//     alignItems: "stretch",
//   },
//   img: {
//     resizeMode: 'contain',
//     height:200
//   },
// });
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class DetailProfile extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
