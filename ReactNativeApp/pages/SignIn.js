import React, {useState, useEffect} from 'react'
import {Controller, useForm} from 'react-hook-form'
import {Text, TextInput, View, StyleSheet} from 'react-native'
import colors from '../config/colors'
import {useAuthentication} from '../hooks/Authentication'
import MyButton from '../components/MyButton'
import Page from '../components/Page'


function SignIn({navigation}) {

    const {control} = useForm()
    const [message, setMessage] = useState()
    const {isAdmin, login} = useAuthentication()
    const [isLoading, setIsLoading] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {

        setIsMounted(true)

        return () => setIsMounted(false)
    }, [])


    const onSubmit = async data => {

        setIsLoading(true)
        const user = await login(username, password)
        setIsLoading(false)

        if (!user) {
            setMessage("Incorrect username or password")
            return
        }


        if (user && !isAdmin(user)) {
            setMessage("You have to login as an administrator")
            return
        }

        if (user && isAdmin(user)) {
            if (isMounted) {
                navigation.push('AllDemos')
            }
            return
        }
    }


    return (
        <Page navigation={navigation}>
            <View style={styles.form}>
                <View style={styles.formField}>
                    <Text style={styles.label}>User name</Text>
                    <Controller
                        control={control}
                        render={({onChange, onBlur, value}) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => setUsername(value)}
                                value={username}
                            />
                        )}
                        name="username"
                        rules={{required: true}}
                        defaultValue=""
                    />

                </View>

                <View style={styles.formField}>
                    <Text style={styles.label}>Password</Text>
                    <Controller
                        control={control}
                        render={({onChange, onBlur, value}) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => setPassword(value)}
                                value={password}
                                secureTextEntry={true}
                            />
                        )}
                        name="password"
                        rules={{required: true}}
                        defaultValue=""
                    />

                    {/*{message && <Text style={styles.error}>{message}</Text>}*/}
                </View>
                <MyButton handleClick={onSubmit}>Sign in</MyButton>
            </View>
        </Page>
    )
}

const styles = StyleSheet.create({
    form: {
        maxWidth: 600,
    },
    formField: {
        marginTop: 20,
    },
    label: {
        marginBottom: 10
    },
    error: {
        color: colors.customRed
    },
    input: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: colors.customWhite,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.customBrown,
        height: 50,
    }
})

export default SignIn