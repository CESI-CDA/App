import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Alert, Image, TextInput, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { firebase } from '../config/firebase';
import * as FileSystem from 'expo-file-system';
import CustomNavBar from "../components/NavBar";
import { colors } from "../config/color";

export default function UploadScreen({ navigation }) {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [titreRes, setTitreRes] = useState('');
    const [contenuRes, setContenuRes] = useState('');
    const [urlRes, setUrlRes] = useState('');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowEditing: true,
        });

        if (!result.cancelled) {
            setImage(result.assets[0].uri);
        }
    };

    const uploadMedia = async () => {
        setUploading(true);

        try {
            const response = await fetch(image);
            const blob = await response.blob();

            const filename = image.substring(image.lastIndexOf('/') + 1);
            const ref = firebase.storage().ref().child(filename);

            await ref.put(blob);
            const downloadURL = await ref.getDownloadURL(); // Récupérer l'URL de téléchargement de l'image

            setUploading(false);
            setUrlRes(downloadURL); // Mettre à jour l'URL 
            Alert.alert('Image uploaded successfully!');
        } catch (error) {
            console.error(error);
            setUploading(false);
            Alert.alert('Error uploading image');
        }
    };

    const handleUpload = async () => {
        try {
            await uploadMedia(); // Télécharger l'image avant d'ajouter la ressource

            const response = await fetch('https://192.168.1.193/api/ressources', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    titre_res: titreRes,
                    contenu_res: contenuRes,
                    url_res: urlRes,
                    id_type_res: 1,
                    id_rel: 1,
                    id_vis: 1,
                    id_cat: 1
                }),
            });
            if (response.ok) {
                Alert.alert('Resource added successfully!');
            } else {
                Alert.alert('Error adding resource');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Error adding resource');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.selectbutton} onPress={pickImage}>
                <Text>Pick an image</Text>
            </TouchableOpacity>

            <View>
                {image && <Image
                    source={{ uri: image }}
                    style={{ width: 300, height: 300 }}
                />}

                <TextInput
                    style={styles.input}
                    placeholder="Titre de la ressource"
                    onChangeText={text => setTitreRes(text)}
                    value={titreRes}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contenu de la ressource"
                    onChangeText={text => setContenuRes(text)}
                    value={contenuRes}
                />
                <Button title="Valider" onPress={handleUpload} />
            </View>
            <CustomNavBar navigation={navigation}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundPrimary,
        alignItems: "center",
        justifyContent: "flex-start",
      },
    selectbutton: {
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 10,
        width: '80%',
        paddingHorizontal: 10,
    },
});
