import { StyleSheet, View, Pressable, Text, TextInput } from 'react-native';
import { colors } from '../config/color';
import { Controller } from 'react-hook-form';

export default function CustomTextInput({ control, name, placeholder, secureTextEntry }) {
    return (
        <View style={styles.identifiant}>
            <Text>{name}</Text>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { value, onChange, onBlur } }) => (

                    <TextInput
                        style={styles.input}
                        placeholder={placeholder}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        secureTextEntry={secureTextEntry}
                    />

                )}
                name={name}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        padding: 10,
        backgroundColor: colors.backgroundSecondary,
        borderRadius: 25,
        marginTop: 5,
    }
});