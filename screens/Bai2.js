import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from "react-native";

const Bai2 = () => {
    return(
        <SafeAreaView style={Mystyles.container}>
            <Button title="Button 1" onPress={()=> alert("Hello !")} />
            <TouchableOpacity onPress={() => alert("Hello 2 !")} style={Mystyles.button}>
                <Text style={Mystyles.text}>Button 2</Text>
                
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const Mystyles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems: 'center'
    },
    button:{
        backgroundColor:"blue",
        marginTop:10,
        alignItems:"center",
        padding:10
    },
    text:{
        color:"white",
        fontSize:18
    }
});

export default Bai2;