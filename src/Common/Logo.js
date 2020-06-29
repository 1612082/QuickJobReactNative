import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import {linkLogo} from '../Global/string'
const Logo = (props) => {
    return (
        <View style = {styles.item}>
            <Image source={{uri: linkLogo}}
                style={styles.logo} />
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    item:{
        alignSelf: 'center',
        marginTop: '20%',
        marginBottom: '20%',
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 25,

    },
    text:{
        color: 'white',
        fontSize: 15,
        textAlign: 'center'
    }
})
