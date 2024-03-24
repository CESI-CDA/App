import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ResponsiveCard = ({ title, imageUrl, content }) => {
  return (
    <View style={styles.card}>
      <Image source={imageUrl} style={styles.cardImage} />
      <View style={styles.contentCard}>
        <View style={styles.titleAndIcon}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Ionicons
            name="ellipsis-vertical"
            size={20}
            color="black"
            style={styles.icon}
          />
        </View>
        <Text style={styles.contentResource} numberOfLines={4}>
          {content}
        </Text>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    width: windowWidth - 40, 
    height: 140,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
  },
  cardImage: {
    width: 192,
    height: 120,
    marginTop: 10,
    borderRadius: 20,
  },
  contentCard: {
    flexDirection: "column",
    marginLeft: 15,
    flex: 1, // Pour que le contenu prenne tout l'espace disponible
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: "Roboto-Bold",
  },
  titleAndIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 17,
  },
  icon: {
    marginTop: 4,
  },
  contentResource: {
    fontSize: 16,
    color: "#808080",
  },
});

export default ResponsiveCard;
