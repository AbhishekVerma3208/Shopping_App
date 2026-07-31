import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export default function Loader({ fullScreen = true, message = 'Loading...' }) {
  return (
    <View style={[styles.container, fullScreen && styles.fullScreen]}>
      <View style={styles.content}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.text}>{message}</Text>
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
    padding: 20,
    borderRadius: 12,
    backgroundColor: colors.white,
  },
  text: {
    marginTop: 12,
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: '500',
  },
});