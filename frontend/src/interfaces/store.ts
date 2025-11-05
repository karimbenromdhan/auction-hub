
import type { Toast } from './common';
import type { User, LoginCredentials, RegisterCredentials } from '../types';

export interface UIState {
    isLoading: boolean;
    toasts: Toast[];
    // Toast actions
    showToast: (toast: Omit<Toast, 'id'>) => void;
    removeToast: (id: string) => void;
}

/**
 * Auth Store state interface
 */
export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;

    // Actions
    login: (credentials: LoginCredentials) => Promise<void>;
    register: (credentials: RegisterCredentials) => Promise<void>;
    logout: () => void;
}
