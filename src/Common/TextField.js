import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const TextField = (props) => {
    return (
        <View>
            <TextInput keyboardType={props.typekeyboard} secureTextEntry = {props.pass} placeholder = {props.placeholder} placeholderTextColor = 'black' style={styles.text}></TextInput>
        </View>
    )
}

export default TextField

const styles = StyleSheet.create({
    text:{
        height: 40,
        borderColor: 'gray',
        borderWidth:1,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 15,
        marginBottom: 15
    }
})


