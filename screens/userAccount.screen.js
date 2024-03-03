import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, Image, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../config/color";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPenClip, faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import TextInputField from "../components/TextInputField";

const UserAccountScreen = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (text) => {
    setInputValue(text); 
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.topheader}>
            <Image
              source={require("../assets/background-header-user-account.jpg")}
              style={styles.headerImage}
            />
          </View>
          <Image
            source={require("../assets/example-photo-user.jpg")}
            style={styles.circle}
          />
           <View style={styles.cameraIconContainer}>
            <FontAwesomeIcon icon={faCameraRetro} style={styles.cameraIcon} />
          </View>
          <Text style={styles.username}>USERNAME</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyheader}>
            <Text style={styles.bodytitle}>Mes infos</Text>
            <View style={styles.modifyprofile}>
              <FontAwesomeIcon icon={faPenClip} />
              <Text style={styles.textmodifyprofile}>Modifier le Profil</Text>
            </View>
          </View>
          <ScrollView style={{ flex: 1 }}>
          <View style={styles.formfield}>
            <TextInputField
              label="Nom"
              placeholder="Mon nom"
              value={inputValue}
              onChangeText={handleChange}
            />
            <TextInputField
              label="Prénom"
              placeholder="Mon prénom"
              value={inputValue}
              onChangeText={handleChange}
            />
            <TextInputField
              label="Pseudonyme"
              placeholder="Mon pseudonyme"
              value={inputValue}
              onChangeText={handleChange}
            />
            <TextInputField
              label="Email"
              placeholder="Mon adresse mail"
              value={inputValue}
              onChangeText={handleChange}
            />
            <TextInputField
              label="Mot de passe"
              placeholder="**************"
              value={inputValue}
              onChangeText={handleChange}
            />
          </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
  },
  header: {
    width: Dimensions.get("window").width,
    height: 340,
    position: "relative",
    backgroundColor: colors.backgroundPrimary,
  },
  topheader: {
    width: Dimensions.get("window").width,
    height: 200,
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
  },
  username: {
    textAlign: "center",
    lineHeight: 210,
    fontFamily: "Roboto-Light",
    fontSize: 18,
  },
  circle: {
    position: "absolute",
    width: 215,
    height: 215,
    borderRadius: 112,
    top: "50%",
    left: "50%",
    marginTop: -100,
    marginLeft: -112,
  },
  cameraIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    padding: 10,
    marginRight: 120,
    marginBottom: 60
  },
  cameraIcon: {
    color: "#000",
  },
  body: {
    flex: 1,
    marginLeft: 18,
    marginRight: 18,
    marginTop: 18,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  bodyheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 5,
  },
  bodytitle: {
    fontSize: 24,
    fontFamily: "Roboto-Regular",
  },
  modifyprofile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 110,
    height: 30,
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    paddingHorizontal: 5,
    marginTop: 5,
    paddingLeft: 8,
    paddingRight: 8,
  },
  textmodifyprofile: {
    fontSize: 10,
    fontFamily: "Roboto-Light",
  },
  formfield: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
  },
});

export default UserAccountScreen;
