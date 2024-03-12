import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { colors } from "../config/color";

function RessourceCard({ id, title, description }) {
  return (
    <TouchableOpacity
      activeOpacity="0.8"
      onPress={() => console.log(id)}
      style={styles.container}
    >
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://picsum.photos/350/180",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 280,
    width: "100%",
    borderRadius: 15,
    backgroundColor: colors.backgroundPrimary,
    marginTop: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  image: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    width: "100%",
    height: 180,
  },
  title: {
    marginTop: 5,
    marginLeft: 5,
    fontSize: 18,
    color: colors.textPrimary,
  },
  description: {
    color: colors.textPrimary,
    marginTop: 3,
    marginLeft: 5,
  },
  container: {
    width: "80%",
    minWidth: 300,
  },
});

export default RessourceCard;
