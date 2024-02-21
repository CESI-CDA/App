import React from "react";
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
  // Calculer la hauteur de l'image en fonction de la largeur de l'écran
  const imageHeight = (180 / 350) * width; // Ratio de l'image : 180 / 350

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Titre de la ressource</Text>

        <Image
          source={{
            width: width,
            height: imageHeight,
            uri: "https://picsum.photos/350/280",
          }}
          style={styles.image}
          resizeMode="cover" // Utiliser "cover" pour remplir complètement le conteneur sans déformer l'image
        />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.category}>Catégorie:</Text>
            <Text style={styles.typeOfRelation}>Types de relations:</Text>
            <Text style={styles.typeOfResource}>Type de ressource:</Text>
          </View>

          <Text style={styles.resourceContent}>Contenu:</Text>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
            turpis a libero placerat rutrum. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Integer at
            odio auctor, venenatis massa eu, gravida nunc. Mauris eu risus
            velit. Proin euismod sem sit amet orci sodales, id feugiat metus
            malesuada. Nunc ut sapien eget lorem luctus lobortis.
            {"\n"}
            {"\n"}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec turpis a
            libero placerat rutrum. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia Curae; Integer at odio
            auctor, venenatis massa eu, gravida nunc. Mauris eu risus velit.
            Proin euismod sem sit amet orci sodales, id feugiat metus malesuada.
            Nunc ut sapien eget lorem luctus lobortis.
            {"\n"}
            {"\n"}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec turpis a libero
            placerat rutrum. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Integer at odio auctor,
            venenatis massa eu, gravida nunc. Mauris eu risus velit. Proin
            euismod sem sit amet orci sodales, id feugiat metus malesuada. Nunc
            ut sapien eget lorem luctus lobortis.
            {"\n"}
            {"\n"}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
            turpis a libero placerat rutrum. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Integer at
            odio auctor, venenatis massa eu, gravida nunc. Mauris eu risus
            velit. Proin euismod sem sit amet orci sodales, id feugiat metus
            malesuada. Nunc ut sapien eget lorem luctus lobortis.
          </Text>
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

  image: {
    width: width,
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
