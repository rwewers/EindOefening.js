import React, {useEffect, useState} from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {getAllUsers} from '../helpers/axiosConfig'
import {useAuthentication} from '../hooks/Authentication'
import PageTitle from '../components/PageTitle'
import Page from '../components/Page'


function AllDemos({navigation}) {

    const {getUser} = useAuthentication()
    const [allUsers, setAllUsers] = useState()

    useEffect(() => {

        fetchData()

        async function fetchData() {

            const user = await getUser()

            if (!user) {
                navigation.navigate('SignIn')
                return
            }

            try {
                const result = await getAllUsers()
                console.log(result);
                setAllUsers(result.data)

            } catch (error) {
                navigation.navigate('Home')
                console.error(error)
            }
        }
    }, [])


    return (
        <Page navigation={navigation}>
            <PageTitle>All Demos</PageTitle>
            <View style={styles.list}>
                {allUsers && (
                    <ScrollView style={styles.allDemosView}>
                        {allUsers.map(user => (
                            <View key={user.userId}>
                                {user.demos.length > 0 && (
                                    <View>
                                        <Text style={styles.user}>User: {user.username}</Text>
                                        {user.demos.map(demo => (
                                            <View key={demo.id} style={styles.card}>
                                                <Text style={styles.demoText}>{demo.artist} - {demo.songTitle}</Text>
                                            </View>
                                        ))}
                                    </View>
                                )}
                            </View>
                        ))}
                    </ScrollView>
                )}
            </View>
        </Page>
    )
}

const styles = StyleSheet.create({
    allDemosView: {
        paddingTop: 20,
        paddingBottom: 60
    },
    list: {
        paddingBottom: 60
    },
    user: {
        color: '#198c89',
        fontWeight: 'bold'
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 10,
        marginBottom: 20
    },
    playIcon: {
        width: 36,
        height: 36,
        marginRight: 20
    },
    text: {
        fontSize: 20,
        color: 'white',
    },

    demoText: {
        color: 'white',
    },
})

export default AllDemos