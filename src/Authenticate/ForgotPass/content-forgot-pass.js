import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const ContentForgotPass = () => {
    return (
        <View style = {styles.viewStyle}>
            <Text style = {{fontSize:25,color:'black', marginTop:"20%"}}>
                Forgot Password
            </Text>
            <Text style = {{fontSize:20,color:'black', marginBottom:40, marginTop:20, margin:40}}>
                Enter your email address and we'll send you a link to reset your pass
            </Text>
        </View>
    )
}

export default ContentForgotPass

const styles = StyleSheet.create({
    viewStyle:{
        flexDirection:'column',
        alignItems:'center',
    }
})
