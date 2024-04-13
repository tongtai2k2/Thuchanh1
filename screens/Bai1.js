import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Bai1 = () => {
  return (
    <SafeAreaView style={Mystyles.container}>
    <View style={Mystyles.ViewStyle}>
      <Text style={Mystyles.TextStyle}>Hello World</Text>
    </View>
    </SafeAreaView>
  );
};

const Mystyles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  ViewStyle: {
    width: 100,
    height: 100,
    backgroundColor: 'aqua',
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  TextStyle: {
    color: 'black'
  }
});

export default Bai1; 