import React from "react"
import { StyleSheet, Text, View } from 'react-native';


const Header = () => (
    <View style={styles.header}>
        <Text style={styles.title}>My Todos</Text>
    </View>
)



const styles = StyleSheet.create({
    
    header:{
        height:80,
        backgroundColor:'coral',
        justifyContent:"center"
    },

    title:{
       textAlign:"center",
       color:"#fff",
       fontSize:20,
       fontWeight:'bold' 
    }

  });

export default Header