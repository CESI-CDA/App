import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { colors } from "../config/color.js";

const CustomNavBar = ({ navigation }) => {

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Settings")}
      >
        <Ionicons name="archive-outline" size={24} color='#FFF' /> 
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Ressources")}
      >
        <Ionicons name="home-outline" size={24} color='#FFF' /> 
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { justifyContent: "center" }]} 
        onPress={() => navigation.navigate("Upload")}
      >
        <Ionicons name="add-circle-outline" size={24} color='#FFF' /> 
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("UserAccount")}
      >
        <Ionicons name="person-circle-outline" size={24} color='#FFF' /> 
      </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.primary,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60, 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  
  button: {
    flexDirection: "row", 
    alignItems: "center", 
    padding: 10,
  },
 
});

export default CustomNavBar;
