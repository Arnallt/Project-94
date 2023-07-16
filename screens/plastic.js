import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {Header} from 'react-native-elements'

export default class Plastic extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Header 
      backgroundColor = {'#ffff'}
      centerComponent = {{
        text: 'Recycling Buddy',
        style : {color: '#0', fontSize:23, fontWeight: 'bold'}
      }}/>
        <Text style = {styles.items}>
         
CD{'\n'}
DVD{'\n'}
Pan grip{'\n'}
Trash Bags{'\n'}
Sunglasses{'\n'}
Food Container{'\n'}
Bubble Wrap{'\n'}
Plastic Bags{'\n'}
Plastic Cups{'\n'}
Plastic Straws{'\n'}
Plastic Plates{'\n'}
Plastic Bottles{'\n'}
Plastic Cutlery{'\n'}
Switch Housings{'\n'}
       </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5653D4"
  },
  items: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    marginTop: 60,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',   
    
  },

});
