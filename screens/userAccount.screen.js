import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../config/color";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPenClip, faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import TextInputField from "../components/TextInputField";

//const apiUrl = process.env.EXPO_PUBLIC_API_URL + "/users/1";
const UserAccountScreen = () => {
  // données utilisateur fictives
  const fakeUserData = {
    nom: "Dupont",
    prenom: "Lila",
    pseudonyme: "Lilaloo",
    email: "lila.dupont@example.com",
    motDePasse: "********",
    url_user:
      "https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_1280.png",
  };

  const [userData, setUserData] = useState(fakeUserData);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingMode, setIsEditingMode] = useState(false); // État pour gérer le mode d'édition du bouton

  /* useEffect(() => {
   const fetchUserData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUserData(data.item);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);*/

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
    setIsEditingMode(!isEditingMode); // Inverse le mode d'édition du bouton
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
          <Image source={{ uri: userData?.url_user }} style={styles.circle} />
          <View style={styles.cameraIconContainer}>
            <FontAwesomeIcon icon={faCameraRetro} style={styles.cameraIcon} />
          </View>
          <Text style={styles.username}>{userData?.pseudonyme}</Text>
        </View>
        <View style={styles.body}>
          <ScrollView style={{ flex: 1 }}>
            <View style={styles.bodyheader}>
              <Text style={styles.bodytitle}>Mes infos</Text>
              <View style={styles.modifyprofile}>
                <FontAwesomeIcon icon={faPenClip} />
                <Text
                  style={styles.textmodifyprofile}
                  onPress={handleEditProfile}
                >
                  {isEditingMode
                    ? "Valider les modifications"
                    : "Modifier le Profil"}
                </Text>
              </View>
            </View>
            <View style={styles.formfield}>
              <TextInputField
                style={styles.input}
                label="Nom"
                placeholder="Mon nom"
                value={userData?.nom}
                onChangeText={(text) => setUserData({ ...userData, nom: text })}
                editable={isEditing}
              />
              <TextInputField
                style={styles.input}
                label="Prénom"
                placeholder="Mon prénom"
                value={userData?.prenom}
                onChangeText={(text) =>
                  setUserData({ ...userData, prenom: text })
                }
                editable={isEditing}
              />
              <TextInputField
                style={styles.input}
                label="Pseudonyme"
                placeholder="Mon pseudonyme"
                value={userData?.pseudonyme}
                onChangeText={(text) =>
                  setUserData({ ...userData, pseudonyme: text })
                }
                editable={isEditing}
              />
              <TextInputField
                style={styles.input}
                label="Mail"
                value={userData?.email}
                onChangeText={(text) =>
                  setUserData({ ...userData, motDePasse: text })
                }
                editable={false}
              />
              <TextInputField
                style={styles.input}
                label="Mot de passe"
                placeholder="**************"
                value={userData?.motDePasse}
                onChangeText={(text) =>
                  setUserData({ ...userData, motDePasse: text })
                }
                editable={isEditing}
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
    textTransform: "uppercase",
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
    marginBottom: 60,
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
