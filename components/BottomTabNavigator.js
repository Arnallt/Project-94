import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Plastic from '../screens/plastic';
import Metal from '../screens/metal';
import Bio from '../screens/bio'
import Ionicons from "react-native-vector-icons/Ionicons";


const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({color, size }) => {
              let iconName;

              if (route.name === "Paper") {
                iconName = "document";
              } else if (route.name === "Plastic") {
                iconName = "nuclear";
              }
              else if (route.name === "Metal") {
                iconName = "barbell";
              }
              else if (route.name === "Bio"){
                iconName = "leaf"
              }
              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }
          })}
          tabBarOptions={{
            activeTintColor: "#1F5C46",
            inactiveTintColor: "black",}}>
          <Tab.Screen name="Plastic" component={Plastic} />
          <Tab.Screen name="Metal" component={Metal} />
          <Tab.Screen name="Bio" component={Bio} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
