import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import NavigationBar from './NavigationBar'
import colors from '../config/colors'

function Page({ children, navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <NavigationBar navigation={navigation}/>
            <View style={styles.page}>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default Page

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.customBackground,
    },
    page: {

        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 80
    }
})