import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../config/color";
import { StyleSheet, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomNavBar from "../components/NavBar";
import Header from "../components/Header";
import MyCard from "../components/MyCard";

export default function FavoriteRessourcesScreen({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header title="Mes Favoris" onBackPress={() => navigation.goBack()} />
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.body}>
            <MyCard
              title="Card Header"
              imageUrl={require("../assets/fourmi.jpg")}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nulla in neque tincidunt lacinia. Ut ut tincidunt justo. Cras et dui at enim consequat varius."
            />
            <MyCard
              title="Card Header"
              imageUrl={require("../assets/poisson.jpg")}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nulla in neque tincidunt lacinia. Ut ut tincidunt justo. Cras et dui at enim consequat varius."
            />
            <MyCard
              title="Card Header"
              imageUrl={require("../assets/bebete2.jpg")}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nulla in neque tincidunt lacinia. Ut ut tincidunt justo. Cras et dui at enim consequat varius."
            />
            <MyCard
              title="Card Header"
              imageUrl={require("../assets/mouche.jpg")}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nulla in neque tincidunt lacinia. Ut ut tincidunt justo. Cras et dui at enim consequat varius."
            />
            <MyCard
              title="Card Header"
              imageUrl={require("../assets/chien1.jpg")}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nulla in neque tincidunt lacinia. Ut ut tincidunt justo. Cras et dui at enim consequat varius."
            />
            <MyCard
              title="Card Header"
              imageUrl={require("../assets/chien2.jpg")}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nulla in neque tincidunt lacinia. Ut ut tincidunt justo. Cras et dui at enim consequat varius."
            />
          </View>
        </ScrollView>
        <CustomNavBar navigation={navigation} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    backgroundColor: colors.backgroundSecondary,
  },
});
