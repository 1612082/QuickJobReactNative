import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

const OptionForgotPass = () => {
    return (
        <View style = {styles.viewStyle}>
            <TextInput placeholder = 'Email' style={{borderColor:'gray', borderWidth:1, width:'80%', color:'white', height:40}}>

            </TextInput>
            <TouchableOpacity style={[styles.btn,{backgroundColor:'dodgerblue',marginTop:15 }]}>
                <Text style={styles.text}>Send email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn,{backgroundColor:'grey',marginTop:30 }]}>
                <Text style={styles.text}>Cancel</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OptionForgotPass

const styles = StyleSheet.create({
    viewStyle:{
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center',
    },
    text:{
        color: 'white',
        fontSize:20
    },
    btn:{
        width:'80%',
        alignItems:'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 10
    }
})
