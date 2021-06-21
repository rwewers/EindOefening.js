import React from "react";
import {Button,TextInput,  View, Text, StyleSheet, Image, ScrollView} from "react-native";


export default function SignIn({navigation}){

    const [password, setPassword] = React.useState(null);
    const [username, setUsername] = React.useState('');

    return(
        <ScrollView style={signInStyles.scrollViewContainer}>
        <View style={signInStyles.signInContainer}>
            <Text style={signInStyles.signInColor}>Sign in</Text>
            <Image
                style={signInStyles.signInBackgroundImage}

                source={require('../assets/home_background.jpg')}

            />
            <View style={signInStyles.inputFieldsContainer} >
            <TextInput
                label="Username"
                style={signInStyles.inputFields}
                placeholder="USERNAME"
                placeholderTextColor="white"
                value={username}
                onChangeText={text => setUsername(text)}

            />
            <TextInput
                label="Password"
                style={signInStyles.inputFields}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder="PASSWORD"
                placeholderTextColor="white"
            />


                <Button
                color="#198c89"
                style={signInStyles.signInButton}
                title="Sign in"
                onPress={() => navigation.navigate('MyProfile')}
            />

            </View >
        </View>
        </ScrollView>
    );
}

const signInStyles = StyleSheet.create({

    signInContainer : {

        backgroundColor: 'black',

        justifyContent: 'flex-start',
        alignItems: 'center',


    },

    signInButton:{
        borderWidth: 1,
        borderColor: 'white',
        color: 'white',
        width: 250,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },

    inputFieldsContainer : {

        top: -150,
    },

    scrollViewContainer: {
        flex: 1,

        margin: 0,
        backgroundColor : 'black',
    },

    signInBackgroundImage :{
        top: -82,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',


    },


    signInColor: {
        backgroundColor: 'black',
        marginTop: 50,

        fontSize: 20,
        color : 'white',
    },

    inputFields: {
        margin: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: 'grey',
        color: 'white',
        width: 250,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,



    },


});