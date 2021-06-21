import React from "react";
import { Image, View, Text, StyleSheet,ScrollView} from "react-native";


export default function Homepage({navigation}){
    return(
        <ScrollView style={homepageStyles.scrollViewContainer} >
        <View style={homepageStyles.homepageContainer}>
            <Text style={homepageStyles.homepageColor}>Homepage</Text>
            <Image
                style={homepageStyles.BackgroundImage}

                source={require('../assets/home_background.jpg')}

            />

        <View  style={homepageStyles.newsContainer}>
                <Text style={homepageStyles.newsColor}>NEWS</Text>
                <Text style={homepageStyles.newsColor}>JAN 29, 2021</Text>
                <Text style={homepageStyles.newsColor}>DON DIABLO - INTO THE UNKNOWN</Text>
                <Text style={homepageStyles.newsColor}>JAN 16, 2021</Text>
                <Text style={homepageStyles.newsColor}>DON DIABLO & IMANBEK - KILL ME BETTER FT. TREVOR DANIEL (TRAVIS BARKER ALT VERSION)</Text>
                <Text style={homepageStyles.newsColor}>DEC 11, 2020</Text>
                <Text style={homepageStyles.newsColor}>DUA LIPA - LEVITATING FT. DABABY (DON DIABLO REMIX)</Text>
                <Text style={homepageStyles.newsColor}>JAN 16, 2021</Text>
                <Text style={homepageStyles.newsColor}>DON DIABLO & IMANBEK - KILL ME BETTER FT. TREVOR DANIEL (DON DIABLO VIP MIX)</Text>
        </View>
            {/*<Button*/}
            {/*    title="Sign in"*/}
            {/*    onPress={() => navigation.navigate('Sign In')}*/}
            {/*    />*/}


        </View>
        </ScrollView>

    );
}

const homepageStyles = StyleSheet.create({


    homepageContainer : {
        width: '100%',
        height:   '100%',
        backgroundColor: 'black',
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 0,

    },

    scrollViewContainer: {
        flex: 1,
        margin: 0,
        backgroundColor : 'black',
    },





    BackgroundImage :{
        top: -40,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',


    },

    homepageColor: {
        backgroundColor: 'black',
        marginTop: 50,
        fontSize: 20,
        color : 'white',
    },
    newsContainer : {
        top: -50,
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        marginTop: 0,

    },

    newsColor : {

        margin: 5,
        color: 'white',
        fontSize: 10,
    },
});