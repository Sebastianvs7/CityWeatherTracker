export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthContextType {
  isAuthenticated: boolean | null;
  refreshAuth: () => Promise<void>;
}

