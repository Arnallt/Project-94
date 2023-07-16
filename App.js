import React, { Component} from "react";
import {View} from 'react-native';
import BottomTabNavigator from "./components/BottomTabNavigator";
import {Header} from 'react-native-elements'

export default class App extends Component {
  render() {
    <View>
     <Header 
      backgroundColor = {'#0B4A35'}
      centerComponent = {{
        text: 'Animal Sounds',
        style : {color: '#fff', fontSize:26, fontWeight: 'bold'}
      }}/>
    </View>

    return <BottomTabNavigator />;
  }
}
