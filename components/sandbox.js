import React, {useState} from "react"
import { StyleSheet, Text,  TextInput, View, Button } from 'react-native';

const Sandbox = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-start",
        backgroundColor : "#0008"
    },

    boxOne:{
        flex:2,
        backgroundColor:'violet',
        padding:10
    },

    boxTwo:{
        flex:2,
        backgroundColor:'gold',
        padding:10
    },

    boxThree:{
        flex:3,
        backgroundColor:'coral',
        padding:10
    },

    boxFour:{
        flex:4,
        backgroundColor:'skyblue',
        padding:10
    }
})

export default Sandbox