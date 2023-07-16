import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {Header} from 'react-native-elements'


export default class Metal extends Component {
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
         
Batteries{'\n'}
Cans{'\n'}
Clips{'\n'}
Coins{'\n'}
Metal Cutlery{'\n'}
Metal Bottles{'\n'}
Lighters{'\n'}
Hinges{'\n'}
Pins{'\n'}
Razors{'\n'}
Pots and Pans{'\n'}
Staples{'\n'}
Weights{'\n'}
Zippers{'\n'}
Rods{'\n'}
Rings{'\n'}
Bells{'\n'}
       </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey"
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