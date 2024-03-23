import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { colors } from "../config/color";

export default function HeaderStat({ title, onBackPress }) {
  return (
    <View style={styles.header}>
      <View style={styles.titleandarrowheader}>
        <Pressable onPress={onBackPress} style={styles.button}>
          <Ionicons name="arrow-back" size={34} color="black" style={{ fontWeight: 'normal' }} />
        </Pressable>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Ionicons name="ellipsis-horizontal" size={24} color="black" style={{ fontWeight: 'normal' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 90,
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.backgroundPrimary
  },
  titleandarrowheader: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    marginLeft: 10,
    fontFamily: "Roboto-Regular",
  },
});
