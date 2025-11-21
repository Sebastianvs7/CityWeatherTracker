import type { LoginCredentials } from '@/types/auth';
import type { User } from '@/types/user';

import { storageService } from './storageService';

export const authService = {
  async register(user: User): Promise<{ success: boolean; error?: string }> {
    try {
      // Check if user already exists
      const existingUser = await storageService.getUserByEmail(user.email);
      if (existingUser) {
        return { success: false, error: 'User with this email already exists' };
      }

      // Save user
      await storageService.saveUserByEmail(user.email, user);
      await storageService.saveUser(user);
      await storageService.setAuthToken(user.email);

      return { success: true };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: 'Registration failed' };
    }
  },

  async login(
    credentials: LoginCredentials,
  ): Promise<{ success: boolean; user?: User; error?: string }> {
    try {
      const user = await storageService.getUserByEmail(credentials.email);

      if (!user) {
        return { success: false, error: 'User not found' };
      }

      if (user.password !== credentials.password) {
        return { success: false, error: 'Invalid password' };
      }

      // Set as current user
      await storageService.saveUser(user);
      await storageService.setAuthToken(user.email);

      return { success: true, user };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Login failed' };
    }
  },

  async logout(): Promise<void> {
    await storageService.clearUser();
  },

  async getCurrentUser(): Promise<User | null> {
    return await storageService.getUser();
  },

  async isAuthenticated(): Promise<boolean> {
    const token = await storageService.getAuthToken();
    return !!token;
  },
};
