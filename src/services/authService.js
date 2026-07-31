import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from './api';

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'user_data';

export const login = async (username, password) => {
  try {
    const response = await api.post('/auth/login', {
      username,
      password,
      expiresInMins: 60,
    });

    const { accessToken, ...userData } = response.data;

    await AsyncStorage.setItem(TOKEN_KEY, accessToken);
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(userData));

    return userData;
  } catch (error) {
    if (error.response?.status === 400 || error.response?.status === 401) {
      throw new Error('Invalid username or password. Please try again.');
    }
    throw new Error(error.message || 'Login failed. Please try again.');
  }
};

export const logout = async () => {
  try {
    await AsyncStorage.multiRemove([TOKEN_KEY, USER_KEY]);
  } catch (error) {
    // multiRemove fail hone par individually try karo, taaki partial clear ho jaye
    try {
      await AsyncStorage.removeItem(TOKEN_KEY);
      await AsyncStorage.removeItem(USER_KEY);
    } catch (innerError) {
      throw new Error('Logout failed. Please try again.');
    }
  }
};

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
};

export const getUser = async () => {
  try {
    const data = await AsyncStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

export const isAuthenticated = async () => {
  try {
    const token = await getToken();
    return !!token;
  } catch {
    return false;
  }
};