import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Pressable, StatusBar, Platform} from 'react-native';
import { colors } from '../config/color';
import { FontAwesome } from '@expo/vector-icons'; 

export default function RessourceBar({ navigation, idRessource }) {
    const [isFavorite, setIsFavorite] = useState(false); // État du favori
    const [isArchived, setIsArchived] = useState(false); // État de l'archivage
    const [statusBarHeight, setStatusBarHeight] = useState(0);

    useEffect(() => {
        const getStatusBarHeight = () => {
            setStatusBarHeight(Platform.OS === 'android' ? StatusBar.currentHeight : 0);
        };
        getStatusBarHeight();
    }, []);

    const handleFavoritePress = () => {
        setIsFavorite(!isFavorite); // Inverse l'état du favori
    };

    const handleArchivePress = () => {
        setIsArchived(!isArchived); // Inverse l'état de l'archivage
    };

    const handleBackPress = () => {
        navigation.goBack();
         
    };

    return (
        <View style={[styles.container, { marginTop: statusBarHeight }]}>
            <Pressable onPress={handleBackPress} style={styles.button}>
                <FontAwesome name="chevron-left" size={24} color="white" />
            </Pressable>
            <View style={styles.add}>
                <Pressable onPress={handleFavoritePress} style={styles.button}>
                    {isFavorite ? (
                        <FontAwesome name="heart" size={24} color={colors.primary} /> 
                    ) : (
                        <FontAwesome name="heart-o" size={24} color="white" />
                    )}
                </Pressable>
                <Pressable onPress={handleArchivePress} style={styles.button}>
                    {isArchived ? (
                        <FontAwesome name="archive" size={24} color={colors.primary} /> 
                    ) : (
                        <FontAwesome name="archive" size={24} color="white" /> 
                    )}
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'transparent', 
        zIndex:999,
    },
    button: {
        padding: 10,
    },
    add: {
        flexDirection: 'row',
    }
});
