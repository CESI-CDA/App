import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import NavBar from "../components/NavBar";
import RessourceCard from "../components/RessourceCard";
import { colors } from "../config/color";
import { Loader } from "../components/Loader";
import CustomNavBar from "../components/NavBar";

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
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
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
      <CustomNavBar navigation={navigation} />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
    paddingBottom:80
  },
  scrollView: {
    flexGrow: 1,
  },
  centeredContent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
