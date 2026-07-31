import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import colors from '../theme/colors';

export default function SearchBar({ value, onChangeText, placeholder = 'Search products...' }) {
  return (
    <View style={styles.container}>
      <Text style={styles.searchIcon}>🔍</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.grayDark}
        value={value}
        onChangeText={onChangeText}
        returnKeyType="search"
        clearButtonMode="while-editing"
      />
      {value && value.length > 0 && (
        <TouchableOpacity onPress={() => onChangeText('')}>
          <Text style={styles.closeIcon}>✕</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginHorizontal: 16,
    marginVertical: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    elevation: 1,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: colors.text,
    paddingVertical: 4,
  },
  closeIcon: {
    fontSize: 16,
    color: colors.grayDark,
    padding: 4,
  },
});