import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { firebase } from '../config/firebase';
import * as FileSystem from 'expo-file-system';

export default function UploadScreen({ navigation }) {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);

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
            setUploading(false);
            Alert.alert('Resource Uploaded!');
            setImage(null);
        } catch (error) {
            console.error(error);
            setUploading(false);
            Alert.alert('Error Uploading Resource');
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

                <TouchableOpacity style={styles.selectbutton} onPress={uploadMedia}>
                    <Text>Upload an image</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
});
