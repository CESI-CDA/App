import { StyleSheet, View, Pressable, Text } from 'react-native';
import { colors } from '../config/color';


export default function Button({ label, theme, onPress }) {
    if (theme === "primary") {
        return (
            <View style={[styles.buttonContainer, { borderRadius: 18 }]}>
                <Pressable
                    style={[styles.button, { backgroundColor: colors.primary }]}
                    onPress={onPress}
                >
                    <Text style={[styles.buttonLabel, { color: colors.textSecondary }]}>{label}</Text>
                </Pressable>
            </View >
        );
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button}
                onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
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