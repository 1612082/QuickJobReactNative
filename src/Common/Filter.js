import React from 'react'
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'

export default function Filter(props) {
    return (
        <View style = {styles.viewFilter} >
            <TouchableOpacity style = {styles.viewFilter}>
                <Image
                style={styles.imgFilter}
                source = {require("../../assets/fiter2.png")}
                ></Image>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    imgFilter:{
        height:30,
        width:30,
        marginTop:5
    },
    viewFilter:{
        width:50,
        height:50,
        marginLeft: 5,
    },
    touch:{
        width:50,
        height:50
    }
})
