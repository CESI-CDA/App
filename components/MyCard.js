import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MyCard = ({ title, imageUrl, content }) => {
  return (
    <View style={styles.card}>
      <Image source={imageUrl} style={styles.cardimage} />
      <View style={styles.contentcard}>
        <View style={styles.titleicon}>
          <Text style={styles.cardtitle}>{title}</Text>
          <Ionicons
            name="ellipsis-vertical"
            size={20}
            color="black"
            style={styles.icon}
          />
        </View>
        <Text style={styles.contentressource} numberOfLines={4}>
          {content}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 370,
    height: 140,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
   
    flexDirection: "row",
  },
  cardimage: {
    width: 192,
    height: 120,
    marginTop: 10,
    borderRadius: 20,
  },
  contentcard: {
    flexDirection: "column",
    marginLeft: 15,
    width: 160,
  },
  cardtitle: {
    fontSize: 18,
    fontFamily: "Roboto-Bold",
  },
  titleicon: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 17,
  },
  icon: {
    marginTop: 4,
  },
  contentressource: {
    fontSize: 16,
    color: '#808080'
  },
});

export default MyCard;
