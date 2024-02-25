import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { colors } from "../config/color";
import Button from "../components/Button";

const { width } = Dimensions.get("window"); // Obtenir la largeur de l'écran

const RessourceScreen = () => {
  const [resourceData, setResourceData] = useState(null);
  useEffect(() => {
    const fetchResourceData = async () => {
      try {
        console.log('Fetching resource data...');
        const response = await fetch('http://192.168.1.27:8000/api/ressources', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch resource data');
        }
  
        const data = await response.json();
        console.log('Resource data:', data);

        // Filtrer la ressource avec l'id 1
        const resourceId1 = data.ressources.data.find(resource => resource.id === 1);
        setResourceData(resourceId1);
      } catch (error) {
        console.error('Error fetching resource data:', error);
      }
    };
  
    fetchResourceData();
  }, []);
  

  // Calculer la hauteur de l'image en fonction de la largeur de l'écran
  const imageHeight = (180 / 350) * width; // Ratio de l'image : 180 / 350

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{resourceData?.titre_res}</Text>

        <Image
          source={
            require('../assets/shape1.png')
            //uri: ,
          }
        
          style={{ width: width, height: imageHeight }}
          resizeMode="cover" // Utiliser "cover" pour remplir complètement le conteneur sans déformer l'image
        />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.category}>Catégorie:</Text>
            <Text style={styles.typeOfRelation}>Types de relations:</Text>
            <Text style={styles.typeOfResource}>Type de ressource:</Text>
          </View>

          <Text style={styles.resourceContent}>{resourceData?.contenu_res}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContent}>
        <Button theme="primary" label="Retour aux articles"></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",
    marginBottom: 10,
  },

  
  content: {
    padding: 8,
  },

  header: {
    height: 90,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },

  category: {
    fontSize: 17,
  },

  typeOfRelation: {
    fontSize: 17,
  },

  typeOfResource: {
    fontSize: 17,
  },

  resourceContent: {
    fontSize: 17,
    paddingTop: 5,
    marginBottom: 10,
  },

  buttonContent: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default RessourceScreen;
