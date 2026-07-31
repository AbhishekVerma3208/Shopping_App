import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export default function ErrorView({ message = 'Something went wrong', onRetry, fullScreen = true }) {
  return (
    <View style={[styles.container, fullScreen && styles.fullScreen]}>
      <View style={styles.content}>
        <Text style={styles.icon}>⚠️</Text>
        <Text style={styles.title}>Oops!</Text>
        <Text style={styles.message}>{message}</Text>
        {onRetry && (
          <TouchableOpacity style={styles.button} onPress={onRetry}>
            <Text style={styles.buttonText}>Try Again</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
  },
  content: {
    alignItems: 'center',
    padding: 24,
  },
  icon: {
    fontSize: 64,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginTop: 12,
  },
  message: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 2,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});