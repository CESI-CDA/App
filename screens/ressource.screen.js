import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet, Image, Dimensions, SafeAreaView } from "react-native";
import { colors } from "../config/color";
import Button from "../components/Button";
import { fonts } from "../config/font";

const { width } = Dimensions.get("window"); 

const apiUrl = process.env.EXPO_PUBLIC_API_URL+'/ressources/1';

const RessourceScreen = () => {
  const [resourceData, setResourceData] = useState(null);

  useEffect(() => {
    const fetchResourceData = async () => {
      try {
        const response = await fetch(apiUrl);
  
        if (!response.ok) {
          throw new Error('Failed to fetch resource data');
        }
  
        const data = await response.json();
        setResourceData(data.item); 
      } catch (error) {
        console.error('Error fetching resource data:', error);
      }
    };
  
    fetchResourceData();
  }, []);

  const imageHeight = (180 / 350) * width;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: resourceData?.url_res }}
            style={{ width: width, height: imageHeight }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.caracteristicProp}>
            <Text style={[styles.category,fonts.caption]}>Catégorie:</Text>
            <Text style={[styles.typeOfRelation,fonts.caption]}>Types de relations:</Text>
            <Text style={[styles.typeOfResource,fonts.caption]}>Type de ressource:</Text>
        </View>
        <View style={[styles.content,styles.shadowProp]}>
          <Text style={[styles.title, fonts.h1]}>{resourceData?.titre_res}</Text>
          <Text style={[styles.resourceContent, fonts.body]}>{resourceData?.contenu_res}</Text>
        </View>
  
      </ScrollView>
      <View style={[styles.buttonContent]}>
        <Button theme="primary" label="Retour aux articles"></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  caracteristicProp:{
    height:100,
    borderBottomWidth: 2, 
    borderBottomColor: colors.secondary, 
    marginLeft: 2,
    marginRight: 50 ,
    justifyContent: 'space-between',
    paddingTop:10,
    paddingBottom: 10,
    paddingLeft : 8
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    marginBottom: 10,
    color: colors.textPrimary,
  },

  imageContainer: {
    position: 'relative',
  },
  content: {
    padding: 8,
  },

  resourceContent: {
    fontSize: 17,
    paddingTop: 5,
    marginBottom: 10,
    color: colors.textPrimary,
    textAlign: 'justify',
  },

  buttonContent: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  shadowProp: {
    width: "auto",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
  },
});

export default RessourceScreen;
