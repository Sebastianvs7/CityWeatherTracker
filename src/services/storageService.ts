import AsyncStorage from '@react-native-async-storage/async-storage';

import type { User } from '@/types/user';

const USER_KEY = '@user_data';
const AUTH_KEY = '@auth_token';

export const storageService = {
  // User data
  async saveUser(user: User): Promise<void> {
    try {
      await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
    } catch (error) {
      console.error('Error saving user:', error);
      throw error;
    }
  },

  async getUser(): Promise<User | null> {
    try {
      const userData = await AsyncStorage.getItem(USER_KEY);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error getting user:', error);
      return null;
    }
  },

  async clearUser(): Promise<void> {
    try {
      await AsyncStorage.removeItem(USER_KEY);
      await AsyncStorage.removeItem(AUTH_KEY);
    } catch (error) {
      console.error('Error clearing user:', error);
      throw error;
    }
  },

  // Authentication
  async setAuthToken(token: string): Promise<void> {
    try {
      await AsyncStorage.setItem(AUTH_KEY, token);
    } catch (error) {
      console.error('Error setting auth token:', error);
      throw error;
    }
  },

  async getAuthToken(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(AUTH_KEY);
    } catch (error) {
      console.error('Error getting auth token:', error);
      return null;
    }
  },

  // Users list for login (store multiple users by email)
  async saveUserByEmail(email: string, user: User): Promise<void> {
    try {
      const usersKey = `@user_${email.toLowerCase()}`;
      await AsyncStorage.setItem(usersKey, JSON.stringify(user));
    } catch (error) {
      console.error('Error saving user by email:', error);
      throw error;
    }
  },

  async getUserByEmail(email: string): Promise<User | null> {
    try {
      const usersKey = `@user_${email.toLowerCase()}`;
      const userData = await AsyncStorage.getItem(usersKey);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error getting user by email:', error);
      return null;
    }
  },
};
