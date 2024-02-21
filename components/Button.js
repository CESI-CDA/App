import { StyleSheet, View, Pressable, Text } from 'react-native';
import { colors } from '../config/color';


export default function Button({ label, theme, onPress, style }) {
    const buttonStyles = [
        styles.button,
        theme === "primary" && { backgroundColor: colors.primary },
        style
    ];

    const labelStyles = [
        styles.buttonLabel,
        theme === "primary" && { color: colors.textSecondary },
    ];

    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={buttonStyles}
                onPress={onPress}
            >
                <Text style={labelStyles}>{label}</Text>
            </Pressable>
        </View>
    );
}



const styles = StyleSheet.create({
    buttonContainer: {
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 8,
    },
    buttonLabel: {
        color: colors.textPrimary,
        fontSize: 16,
    },
});