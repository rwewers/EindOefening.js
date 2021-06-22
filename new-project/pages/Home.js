import React, { useState, useEffect } from 'react'
import {Image, StyleSheet, View} from 'react-native'
import MyButton from '../components/MyButton'
import Page from '../components/Page'
import { useAuthentication } from '../hooks/Authentication'

function Home({ navigation }) {

    const { getUser, isAdmin } = useAuthentication()
    const [user, setUser] = useState()

    useEffect(() => {
        fetchUser()
        async function fetchUser() {
            const user = await getUser()
            if (user && isAdmin(user)) {
                setUser(user)
            }
        }
    }, [])

    return (
        <Page navigation={navigation}>
            {/*<PageTitle>"Welcome Home"</PageTitle>*/}

            {user ? (

                <View>
                    <MyButton
                        handleClick={() => navigation.navigate('AllDemos')}
                    >
                        All demos
                    </MyButton>
                </View>
            ) : (
                <View>
                    <MyButton
                        handleClick={() => navigation.navigate('SignIn')}
                    >
                        Sign In
                    </MyButton>
                </View>
            )}
        </Page>

    )
}

export default Home
