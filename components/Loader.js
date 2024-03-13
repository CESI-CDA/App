// Loader.js
import React from "react";
import { ActivityIndicator, View } from "react-native";
import { colors } from "../config/color.js";

export const Loader = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <ActivityIndicator size="large" color={colors.primary} />
  </View>
);
