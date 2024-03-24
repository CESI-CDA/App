import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Alert, Image, TextInput, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { firebase } from '../config/firebase';
import * as FileSystem from 'expo-file-system';
import CustomNavBar from "../components/NavBar";
import { colors } from "../config/color";
import Header from "../components/Header";

export default function UploadScreen({ navigation }) {
    const [image, setImage] = useState(null);
    const [titreRes, setTitreRes] = useState('');
    const [contenuRes, setContenuRes] = useState('');
    const [urlRes, setUrlRes] = useState('');
    const [typeRes, setTypeRes] = useState('');
    const [categorie, setCategorie] = useState('');
    const [visibilite, setVisibilite] = useState('');
    const [relation, setRelation] = useState('');

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
        try {
            const response = await fetch(image);
            const blob = await response.blob();

            const filename = image.substring(image.lastIndexOf('/') + 1);
            const ref = firebase.storage().ref().child(filename);

            await ref.put(blob);
            const downloadURL = await ref.getDownloadURL(); 

            setUrlRes(downloadURL); 
            Alert.alert('Image uploaded successfully!');
        } catch (error) {
            console.error(error);
            Alert.alert('Error uploading image');
        }
    };

    const handleUpload = async () => {
        try {
            await uploadMedia(); 

            const response = await fetch(apiUrl + "/ressources", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    titre_res: titreRes,
                    contenu_res: contenuRes,
                    url_res: urlRes,
                    id_type_res: typeRes,
                    id_rel: relation,
                    id_vis: visibilite,
                    id_cat: categorie
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
          
       
            <View style={styles.formContainer}>
                <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
                    <Text style={styles.selectButtonText}>Choisissez une image</Text>
                </TouchableOpacity>

                {image && <Image source={{ uri: image }} style={styles.imagePreview} />}

                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    onChangeText={text => setTitreRes(text)}
                    value={titreRes}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Content"
                    onChangeText={text => setContenuRes(text)}
                    value={contenuRes}
                    multiline
                />
                <TextInput
                    style={styles.input}
                    placeholder="Type of resource"
                    onChangeText={text => setTypeRes(text)}
                    value={typeRes}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Category"
                    onChangeText={text => setCategorie(text)}
                    value={categorie}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Visibility"
                    onChangeText={text => setVisibilite(text)}
                    value={visibilite}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Relation"
                    onChangeText={text => setRelation(text)}
                    value={relation}
                />
                <Button title="Publier" onPress={handleUpload} />
            </View>
            <CustomNavBar navigation={navigation}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundSecondary,
        alignItems: "center",
        justifyContent: "center",
    },
    formContainer: {
        width: '90%',
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius:5,
    },
    selectButton: {
        backgroundColor: colors.primary,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    selectButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        borderRadius: 5,
    },
    input: {
        height: 40,
        borderColor: colors.primary,
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
});
