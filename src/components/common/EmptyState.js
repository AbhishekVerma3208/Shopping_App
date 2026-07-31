import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export default function EmptyState({ message = 'No items found' }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🔍</Text>
      <Text style={styles.title}>No Results</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 40,
  },
  icon: {
    fontSize: 64,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginTop: 12,
  },
  message: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 8,
  },
});