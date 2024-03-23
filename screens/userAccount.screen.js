import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import Button from "../components/Button";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../config/color";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPenClip,
  faCameraRetro,
  faHeart,
  faBoxArchive,
} from "@fortawesome/free-solid-svg-icons";
import TextInputField from "../components/TextInputField";
import { useNavigation } from "@react-navigation/native";
import CustomNavBar from "../components/NavBar";
import StatCard from "../components/StatCard";

// URL de l'API
const apiUrl = process.env.EXPO_PUBLIC_API_URL + "/users/1";

const windowWidth = Dimensions.get('window').width;
const marginSize = 18 * 2; // Compte pour les marges marginLeft et marginRight

const UserAccountScreen = () => {
  const [userData, setUserData] = useState(null);
  const [isEditingInput, setIsEditingInput] = useState(false);
  const [isEditingMode, setIsEditingMode] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    // Fonction pour récupérer les données de l'utilisateur
    const fetchUserData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(
            "Échec de la récupération des données de l'utilisateur"
          );
        }

        const data = await response.json();
        setUserData(data.item);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de l'utilisateur:",
          error
        );
      }
    };

    fetchUserData();
  }, []);

  // Fonction pour mettre à jour les informations de l'utilisateur
  const handleUpdateProfile = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData), // Envoyer toutes les données utilisateur
      });

      // Affichage des données envoyées pour la mise à jour
      console.log("Données envoyées pour la mise à jour :", userData);
      if (!response.ok) {
        throw new Error(
          "Échec de la mise à jour des informations de l'utilisateur"
        );
      }

      // Affichage d'un message de confirmation
      Alert.alert(
        "Succès",
        "Vos informations ont été mises à jour avec succès."
      );

      // Réinitialiser le mode d'édition des inputs
      setIsEditingInput(false);
      // Réinitialiser le mode d'édition du bouton supprimer/valider
      setIsEditingMode(false);
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour des informations de l'utilisateur:",
        error
      );
      Alert.alert("Erreur", "Échec de la mise à jour de vos informations.");
    }
  };

  // Fonction pour gérer les modifications des champs de l'utilisateur
  const handleChange = (field, value) => {
    // Met à jour userData
    setUserData((prevUserData) => {
      console.log(`Champ ${field} mis à jour avec la valeur : ${value}`);
      return { ...prevUserData, [field]: value };
    });
  };

  // Fonction pour supprimer le compte de l'utilisateur
  const handleDeleteProfile = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Échec de la suppression de l'utilisateur");
      }

      // Affichage d'un message de confirmation avant la redirection
      Alert.alert("Confirmation", "Votre compte a été supprimé avec succès.", [
        {
          text: "OK",
          onPress: () => {
            navigation.navigate("Index");
          },
        },
      ]);
    } catch (error) {
      console.error("Erreur lors de la suppression de l'utilisateur:", error);
      Alert.alert("Error", "Échec de la suppression de votre compte.");
    }
  };

  // Fonction pour afficher la boîte de dialogue de confirmation de suppression du compte
  const confirmDelete = () => {
    Alert.alert(
      "Confirmation",
      "Êtes-vous sûr de vouloir supprimer votre compte?",
      [
        { text: "Annuler", style: "cancel" },
        {
          text: "Supprimer",
          onPress: handleDeleteProfile,
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
  };

  // Fonction pour activer/désactiver le mode d'édition du profil
  const handleEditProfile = () => {
    setIsEditingInput(!isEditingInput);
    setIsEditingMode(!isEditingMode); // Inverse le mode Valider mes modifications versus supprimer mon compte
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.header}>
            <View style={styles.topheader}>
              <Image
                source={require("../assets/background-header-user-account.jpg")}
                style={styles.headerImage}
              />
            </View>
            <Image
              source={{
                uri:
                  userData?.photo_profil ||
                  "https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_1280.png",
              }}
              style={styles.circle}
            />
            <View style={styles.cameraIconContainer}>
              <FontAwesomeIcon icon={faCameraRetro} style={styles.cameraIcon} />
            </View>
            <Text style={styles.username}>{userData?.pseudonyme}</Text>
          </View>
          <View style={styles.cardStat}>
      <StatCard number={15} icon={faHeart}  marginSize={marginSize} />
      <StatCard number={3} icon={faBoxArchive} marginSize={marginSize} />
    </View>
    
          <View style={styles.body}>
            <View style={styles.bodyheader}>
              <Text style={styles.bodytitle}>Mes infos</Text>
              <View style={styles.modifyprofile}>
                <FontAwesomeIcon icon={faPenClip} />
                <Text
                  style={styles.textmodifyprofile}
                  onPress={handleEditProfile}
                >
                  {isEditingMode
                    ? "Annuler les modifications"
                    : "Modifier mon Profil"}
                </Text>
              </View>
            </View>
            <View style={styles.formfield}>
              <TextInputField
                style={styles.input}
                label="Nom"
                placeholder="Mon nom"
                value={userData?.nom}
                onChangeText={(text) => handleChange("nom", text)}
                editable={isEditingInput}
              />
              <TextInputField
                style={styles.input}
                label="Prénom"
                placeholder="Mon prénom"
                value={userData?.prenom}
                onChangeText={(text) => handleChange("prenom", text)}
                editable={isEditingInput}
              />
              <TextInputField
                style={styles.input}
                label="Pseudonyme"
                placeholder="Mon pseudonyme"
                value={userData?.pseudonyme}
                onChangeText={(text) => handleChange("pseudonyme", text)}
                editable={isEditingInput}
              />
              <TextInputField
                style={styles.input}
                label="Mail"
                placeholder="Mon adresse mail"
                value={userData?.email}
                onChangeText={(text) =>
                  setUserData({ ...userData, email: text })
                }
                editable={false}
              />
            </View>
            <Button
              label={
                isEditingMode
                  ? "Valider mes modifications"
                  : "Supprimer mon compte"
              }
              theme="primary"
              onPress={isEditingMode ? handleUpdateProfile : confirmDelete}
              style={styles.deleteButton}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
      <CustomNavBar navigation={navigation} />
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
  cardStat:{
    flexDirection:'row',
  justifyContent:'space-around'
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
    width: 125,
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
  deleteButton: {
    marginBottom: 10,
  },
  tabNavContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default UserAccountScreen;
