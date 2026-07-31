import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login as loginService, logout as logoutService } from '../services/authService';

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'user_data';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      const userData = await AsyncStorage.getItem(USER_KEY);
      if (token && userData) {
        setUser(JSON.parse(userData));
      } else {
        setUser(null);
      }
    } catch (err) {
      console.log('checkAuth error:', err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (username, password) => {
    setError(null);
    try {
      const userData = await loginService(username, password);
      setUser(userData);
      return userData;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const logout = async () => {
    setError(null);
    let storageError = null;

    try {
      await logoutService();
    } catch (err) {
      // Storage clear fail hua toh bhi local session break karenge
      storageError = err;
      console.log('Logout storage error:', err);
    }

    // Local state hamesha clear hoga, storage error ke bawajood
    setUser(null);

    if (storageError) {
      setError('Logout ho gaya, lekin local data clear karne me issue aaya.');
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used inside <AuthProvider>');
  }
  return ctx;
};