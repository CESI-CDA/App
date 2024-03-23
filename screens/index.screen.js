// Assurez-vous que vous avez correctement importé les dépendances nécessaires
import React from "react";
import { SafeAreaView, StyleSheet, View, StatusBar, Image } from "react-native";
import Logo from "../components/Logo"; // Assurez-vous que le chemin vers votre composant Logo est correct
import Button from "../components/Button";
import { useForm } from "react-hook-form"; // Library pour gerer les formulaires
import { colors } from "../config/color";

//Image
import shape1 from "../assets/images/shape1.png";
import shape2 from "../assets/images/shape2.png";





export default function IndexScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.shape1}>
        <Image
          source={shape1}
          style={{ width: "100%", height: "100%", opacity: 0.9 }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.shape2}>
        <Image
          source={shape2}
          style={{ width: "100%", height: "100%", opacity: 0.5 }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.logoContainer}>
        <Logo theme="light" />
      </View>

            <View style={styles.buttonsContainer}>
                <Button
                    label="Se connecter"
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('Connexion');
                    }}
                />
                <Button
                    theme="primary"
                    label="S'inscrire"
                    onPress={() => {
                        navigation.navigate('Inscription');
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  buttonsContainer: {
    justifyContent: "flex-end",
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  button: {
    borderRadius: 30,
    backgroundColor: "#FFF",
  },
  shape1: {
    width: 300,
    height: "100%",
    position: "absolute",
    left: -10,
    top: -300,
    transform: [{ rotate: "45deg" }],
  },
  shape2: {
    width: 100,
    height: "100%",
    position: "absolute",
    right: -10,
    top: 200,
    transform: [{ rotate: "30deg" }],
  },
});
