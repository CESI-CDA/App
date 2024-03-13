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
    height: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5, // Ajout de l'ombre en utilisant la propriété elevation
    shadowColor: "#000", // Couleur de l'ombre
    shadowOpacity: 0.3, // Opacité de l'ombre
    shadowRadius: 3, // Rayon de l'ombre
  },
  button: {
    flexDirection: "row", 
    alignItems: "center", 
    padding: 10,
  },
 
});

export default CustomNavBar;
