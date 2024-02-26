import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, StyleSheet, TextInput, View, Image } from 'react-native';
import React from 'react';
import { useForm, Controller } from "react-hook-form" // Library pour gerer les formulaires

import { colors } from '../config/color';
import Button from '../components/Button';
import CustomTextInput from '../components/CustomTextInput';
import Logo from '../components/Logo';



const apiUrl = process.env.EXPO_PUBLIC_API_URL;


export default function InscriptionScreen({ navigation }) {
    const { control, handleSubmit, formState: { errors } } = useForm(); //Formulaire

    const onSignupPressed = async (data) => {
        const mail = encodeURIComponent(data['Mail']);
        const motDePasse = encodeURIComponent(data['Mot de passe']);
        const nom = encodeURIComponent(data['Nom']);
        const prenom = encodeURIComponent(data['Prenom']);
        const pseudonyme = encodeURIComponent(data['Pseudonyme']);

        try {
            const url = `${apiUrl}/users?nom=${nom}&prenom=${prenom}&pseudonyme=${pseudonyme}&email=${mail}&password=${motDePasse}`;
            console.log('URL de la requête fetch :', url);

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Sign up failed: ', response);
            }

            const responseData = await response.json();
            console.log('User signed up successfully:', responseData);

            // navigation.navigate('Home');
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    };




    return (
        <SafeAreaView style={styles.container}>
            <Logo />
            <View style={styles.identifiants}>

                <CustomTextInput
                    placeholder={"Pseudonyme"}
                    control={control}
                    name={"Pseudonyme"} />
                <CustomTextInput
                    placeholder={"Nom"}
                    control={control}
                    name={"Nom"} />
                <CustomTextInput
                    placeholder={"Prenom"}
                    control={control}
                    name={"Prenom"} />
                <CustomTextInput
                    placeholder={"Mail"}
                    control={control}
                    name={"Mail"} />
                <CustomTextInput
                    placeholder={"Motdepasse"}
                    control={control}
                    name={"Mot de passe"}
                    secureTextEntry />



            </View>
            <View style={styles.buttonsContainer}>
                <Button theme="primary" label="S'inscrire" onPress={handleSubmit(onSignupPressed)} />
            </View>

            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundPrimary,
        alignItems: 'center',
        justifyContent: 'center',
        height: "100%"
    },
    input: {
        height: 50,
        padding: 10,
        backgroundColor: colors.backgroundSecondary,
        borderRadius: 25,
        marginTop: 5,

    },
    identifiants: {

        width: '100%',
        padding: 20,

    },
    identifiant: {
        marginVertical: 8
    },
    buttonsContainer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        width: '100%',
    }
});

