import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextInputField = ({ label, value, onChangeText, placeholder, editable }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    marginBottom: 5,
  },
  input: {
    fontSize: 18,
    fontFamily: 'Roboto-Light',
    height: 50,
    backgroundColor: '#F2F2F2',
    paddingLeft: 10,
    borderRadius: 100,
  },
});

export default TextInputField;
