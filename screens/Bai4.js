import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Bai4 = () => {
    const [pressCount, setPressCount] = useState(0);
    return (
        <View style={Mystyles.container}>
            <Text>You've pressed the button: {pressCount} time(s)</Text>
            <Button title={`Pressed ${pressCount} time(s)`} onPress={() => setPressCount(pressCount + 1)} />
        </View>
    );
}

const Mystyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    }
})

export default Bai4;