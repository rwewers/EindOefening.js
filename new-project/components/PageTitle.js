import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {
    useFonts,
    Comfortaa_400Regular
} from "@expo-google-fonts/comfortaa"

function PageTitle({ children }) {

    let [fontsLoaded] = useFonts({
        Comfortaa_400Regular
    })

    return (
        <View style={styles.center}>
            {fontsLoaded && (
                <Text style={{
                    fontFamily: 'Comfortaa_400Regular',
                    color: 'white',
                    fontSize: 30,
                    paddingBottom: 20
                }}>
                    {children}
                </Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center'
    }
})


export default PageTitle