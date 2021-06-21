import React from "react";
import {Button, TextInput, View, Text, StyleSheet, Image, ScrollView} from "react-native";


export default function SignIn({navigation}){

    const [username, setUsername] = React.useState(null);
    const [firstname, setFirstname] = React.useState( null);
    const [lastname, setLastname] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [country, setCountry] = React.useState(null);
    const [facebook, setFacebook] = React.useState(null);
    const [instagram, setInstagram] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [passwordRepeat, setPasswordRepeat] = React.useState(null);




    return(

        <ScrollView
            style={signInStyles.scrollViewContainer}
            >

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
                        label="Firstname"
                        style={signInStyles.inputFields}
                        onChangeText={text => setFirstname(text)}
                        value={firstname}
                        placeholder="FIRSTNAME"
                        placeholderTextColor="white"
                    />
                    <TextInput
                        label="Lastname"
                        style={signInStyles.inputFields}
                        onChangeText={text => setLastname(text)}
                        value={lastname}
                        placeholder="LASTNAME"
                        placeholderTextColor="white"
                    />
                    <TextInput
                        label="Email"
                        style={signInStyles.inputFields}
                        onChangeText={text => setEmail(text)}
                        value={email}
                        placeholder="EMAIL"
                        placeholderTextColor="white"
                    />

                    <TextInput
                        label="Country"
                        style={signInStyles.inputFields}
                        onChangeText={text => setCountry(text)}
                        value={country}
                        placeholder="COUNTRY"
                        placeholderTextColor="white"
                    />

                    <TextInput
                        label="Facebook"
                        style={signInStyles.inputFields}
                        onChangeText={text => setFacebook(text)}
                        value={facebook}
                        placeholder="FACEBOOk"
                        placeholderTextColor="white"
                    />
                    <TextInput
                        label="Instagram"
                        style={signInStyles.inputFields}
                        onChangeText={text => setInstagram(text)}
                        value={instagram}
                        placeholder="INSTAGRAM"
                        placeholderTextColor="white"
                    />
                    <TextInput
                        label="Password"
                        style={signInStyles.inputFields}
                        onChangeText={text => setPassword(text)}
                        value={password}
                        placeholder="PASSWORD"
                        placeholderTextColor="white"
                    />
                    <TextInput
                        label="Repeat Password"
                        style={signInStyles.inputFields}
                        onChangeText={text => setPasswordRepeat(text)}
                        value={passwordRepeat}
                        placeholder="REPEAT PASSWORD"
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

    safeScrollViewContainer : {
        backgroundColor:  'black',

    },

    scrollViewContainer: {
        flex: 1,

        margin: 0,
        backgroundColor : 'black',
    },


    signInContainer : {

        backgroundColor: 'black',
        flex:2,
        justifyContent: 'flex-start',
        alignItems: 'center',


    },
    //
    // signInButton:{
    //     borderWidth: 1,
    //     borderColor: 'white',
    //     color: 'white',
    //     width: 250,
    //     borderBottomLeftRadius: 10,
    //     borderBottomRightRadius: 10,
    //     borderTopRightRadius: 10,
    //     borderTopLeftRadius: 10,
    // },
    //
    // inputFieldsContainer : {
    //
    //     top: -150,
    // },
    //


    signInBackgroundImage :{
        width: '100%',
        height: '100%',
        resizeMode: 'contain',


    },
    //
    // signInColor: {
    //     backgroundColor: 'black',
    //     marginTop: 50,
    //     fontSize: 20,
    //     color : 'white',
    // },
    //
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