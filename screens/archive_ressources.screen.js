import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../config/color";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomNavBar from "../components/NavBar";
import Header from "../components/Header";
import MyCard from "../components/MyCard";

export default function ArchiveRessourcesScreen({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header title="Mes Archives" onBackPress={() => navigation.goBack()} />
        <ScrollView style={styles.scrollView}>
          <View style={styles.content}>
            <ScrollView contentContainerStyle={styles.cardContainer}>
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
            </ScrollView>
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
  content: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
