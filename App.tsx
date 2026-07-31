import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { AuthProvider } from './src/contexts/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';
import colors from './src/theme/colors';

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
        <AppNavigator />
      </SafeAreaView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});