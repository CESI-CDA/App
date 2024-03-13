import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, ActivityIndicator } from "react-native";
import RessourceCard from "../components/RessourceCard";
import { colors } from "../config/color";
import { Loader } from "../components/Loader";

export default function RessourcesList({ navigation }) {
  const [ressources, setRessources] = useState([]);
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiUrl + "/ressources")
      .then((response) => response.json())
      .then((data) => {
        setRessources(data.items.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.centeredContent}>
        {ressources.map((resource) => (
          <RessourceCard
            key={resource.titre_res}
            id={resource.id}
            title={resource.titre_res}
            description={resource.contenu_res}
            navigation={navigation}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundSecondary,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  centeredContent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  loaderContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
