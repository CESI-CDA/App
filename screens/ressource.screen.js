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
import { fonts } from "../config/font";
import RessourceBar from "../components/RessourceBar";

const { width } = Dimensions.get("window");

const RessourceScreen = ({ route, navigation }) => {
  const { idRessource } = route.params;
  const apiUrl = process.env.EXPO_PUBLIC_API_URL + '/ressources/' + idRessource;
  const [resourceData, setResourceData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResourceData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setResourceData(data.item);
      } catch (error) {
        console.error('Error fetching resource data:', error);
        setError(error.message);
      }
    };

    fetchResourceData();
  }, []);

  // Gestion en cas d'erreur
  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <RessourceBar idRessource={idRessource} navigation={navigation} />
        <View style={[styles.imageContainer, styles.shadowProp]}>
          <Image
            source={{ uri: resourceData?.url_res }}
            style={{ width: "100%", aspectRatio: 16 / 9  }}
            resizeMode="cover"

          />
        </View>
        <View style={styles.characteristicProp}>
          <Text style={[styles.category, fonts.caption]}>Catégorie : {resourceData?.get_categorie_ressource.intitule_cat}</Text>
          <Text style={[styles.typeOfRelation, fonts.caption]}>Types de relations : {resourceData?.get_relation_ressource.intitule_rel}</Text>
          <Text style={[styles.typeOfResource, fonts.caption]}>Type de ressource : {resourceData?.get_type_ressource.intitule_type_res}</Text>
        </View>
        <View style={styles.content}>
          <Text style={[styles.title, fonts.h1]}>{resourceData?.titre_res}</Text>
          <Text style={[styles.resourceContent, fonts.body]}>{resourceData?.contenu_res}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  characteristicProp: {
    height: 100,
    borderBottomWidth: 2, 
    borderBottomColor: colors.secondary, 
    marginLeft: 2,
    marginRight: 50 ,
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 8,
    width: '100%'
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",
    marginBottom: 10,
    color: colors.textPrimary,
  },
  imageContainer: {
    position: "relative",
  },
  content: {
    padding: 8,
  },
  resourceContent: {
    fontSize: 17,
    paddingTop: 5,
    marginBottom: 10,
    color: colors.textPrimary,
    textAlign: "justify",
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 8,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
});

export default RessourceScreen;
