import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Button } from "react-native";


const Bai3 = () => { 
    return (
        <View style={{ flex: 1, justifyContent: "center" , alignItems: "center",marginTop: 20}}>
            <Button title="Say Hello" onPress={() => alert("Hello!")} />
            <CustomButton text="Say Goodbye" onPress={() => alert("Goodbye!")} buttonStyle={{ backgroundColor: "#4dc2c2" }} />
        </View>
    );
}

const CustomButton = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                backgroundColor: "#ff637c",
                alignSelf: "center",
                padding: 10,
                margin: 10,
                ...props.buttonStyle,
            }}
        >
            <Text style={{ color: "#fff" }}>{props.text}</Text>
        </TouchableOpacity>
    );
};


export default  Bai3;