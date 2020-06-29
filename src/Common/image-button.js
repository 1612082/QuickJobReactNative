import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'

const ImageButton = (props) => {
    return (
        <ImageBackground style ={styles.btn} source = {{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKGs0-h-M7ccJjngDU0tj6mexdrIzYEevG_5DJ0bKBLoIZ_HW3&usqp=CAU'}}>
            <TouchableOpacity style={styles.touch}>
                <Text style={styles.text}>{props.content}</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default ImageButton

const styles = StyleSheet.create({
    btn:{
        height: 100,
        margin:20,
    },
    touch:{
        flex: 1 ,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign:'center'
    }
})
