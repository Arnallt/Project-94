import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {Header} from 'react-native-elements'


export default class Bio extends Component {
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
         
Leafs{'\n'}
Vegetable Peels{'\n'}
Food Waste{'\n'}
Manure{'\n'}
Plant Matter{'\n'}
Sawdust{'\n'}
Wood Logs{'\n'}
Grass{'\n'}
Paper{'\n'}
Cardboard{'\n'}
Paper Cutlery{'\n'}
Paper Plates{'\n'}
Paper Cups{'\n'}
Paper Bags{'\n'}
Jute Bags{'\n'}
Cotton Clothes{'\n'}
Wool Clothes{'\n'}
Jute Clothes{'\n'}
Cotton{'\n'}
       </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green"
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