import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

function MyButton({ handleClick, children }) {

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={handleClick}
        >
            <Text style={styles.btnText}>{children}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#198c89',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20

    },
    btnText: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export default MyButton