import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../theme/colors';
import { useAuth } from '../hooks/useAuth';

export default function ProfileScreen({ navigation }) {
  const { user, logout } = useAuth();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            setLoggingOut(true);
            try {
              await logout();
              // AppNavigator user=null dekhte hi khud Login screen pe switch kar dega
            } catch (error) {
              Alert.alert('Error', 'Failed to logout. Please try again.');
            } finally {
              setLoggingOut(false);
            }
          },
        },
      ]
    );
  };

  if (!user) return null;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 22 }}>👤</Text>
        <Text style={styles.name}>{user.firstName} {user.lastName}</Text>
        <Text style={styles.username}>@{user.username}</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{user.email || '-'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Gender</Text>
          <Text style={styles.value}>{user.gender || '-'}</Text>
        </View>
        <View style={[styles.row, styles.lastRow]}>
          <Text style={styles.label}>User ID</Text>
          <Text style={styles.value}>{user.id || '-'}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
        activeOpacity={0.8}
        disabled={loggingOut}
      >
        <Ionicons name="log-out-outline" size={20} color={colors.white} style={{ marginRight: 8 }} />
        <Text style={styles.logoutText}>{loggingOut ? 'Logging out...' : 'Logout'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.grayLight },
  header: {
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 32,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  avatar: { width: 90, height: 90, borderRadius: 45, backgroundColor: colors.grayLight, marginBottom: 12 },
  name: { fontSize: 20, fontWeight: '700', color: colors.text },
  username: { fontSize: 14, color: colors.textSecondary, marginTop: 2 },
  card: {
    backgroundColor: colors.white,
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 1,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: colors.border },
  lastRow: { borderBottomWidth: 0 },
  label: { fontSize: 14, color: colors.textSecondary },
  value: { fontSize: 14, fontWeight: '500', color: colors.text },
  logoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.error,
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 32,
    paddingVertical: 14,
    borderRadius: 10,
    elevation: 2,
  },
  logoutText: { color: colors.white, fontSize: 16, fontWeight: '600' },
});