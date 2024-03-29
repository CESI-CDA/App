import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import { useForm } from "react-hook-form"; // Library pour gérer les formulaires
import { colors } from "../config/color";
import Button from "../components/Button";
import CustomTextInput from "../components/CustomTextInput";
import Logo from "../components/Logo";

export default function ConnexionScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignInPress = (data) => {
    console.log("Avant la redirection...");

    // Redirection vers la page "Ressources"
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <View style={styles.identifiants}>
        <CustomTextInput
          placeholder={"James04"}
          control={control}
          name={"Identifiant"}
        />
        <CustomTextInput
          placeholder={"Motdepasse"}
          control={control}
          name={"Mot de passe"}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          theme="primary"
          label="Se connecter"
          onPress={handleSignInPress}
        />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    padding: 10,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 25,
    marginTop: 5,
  },
  identifiants: {
    width: "100%",
    padding: 20,
  },
  identifiant: {
    marginVertical: 8,
  },
  buttonsContainer: {
    justifyContent: "flex-end",
    flexDirection: "row",
    width: "100%",
  },
});
