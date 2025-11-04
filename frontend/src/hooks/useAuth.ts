import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authService } from '../services';
import { useAuthStore } from '../store';
import { queryKeys } from '../config/queryClient';
import { LoginCredentials, RegisterCredentials } from '../types';

export const useLogin = () => {
  const login = useAuthStore((state) => state.login);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => login(credentials),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.profile });
    },
  });
};

export const useRegister = () => {
  const register = useAuthStore((state) => state.register);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (credentials: RegisterCredentials) => register(credentials),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.profile });
    },
  });
};

export const useLogout = () => {
  const logout = useAuthStore((state) => state.logout);
  const queryClient = useQueryClient();

  return () => {
    logout();
    queryClient.clear();
  };
};

export const useProfile = () => {
  const { isAuthenticated } = useAuthStore();

  return useQuery({
    queryKey: queryKeys.profile,
    queryFn: authService.getProfile,
    enabled: isAuthenticated,
  });
};

export const useAuth = () => {
  const { user, isAuthenticated, isLoading, error } = useAuthStore();
  const loginMutation = useLogin();
  const registerMutation = useRegister();
  const logout = useLogout();

  return {
    user,
    isAuthenticated,
    isLoading: isLoading || loginMutation.isPending || registerMutation.isPending,
    error,
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout,
  };
};
