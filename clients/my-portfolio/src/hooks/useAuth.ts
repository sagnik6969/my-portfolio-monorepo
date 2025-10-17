import { useQuery } from "@tanstack/react-query";
import type { User } from "@shared/schema";

export function useAuth() {
  const { data: user, isLoading, error } = useQuery<User | null>({
    queryKey: ['/api/auth/user'],
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  const isAuthenticated = !!user && !error;

  return {
    user,
    isAuthenticated,
    isLoading,
  };
}

export function getAuthUrls() {
  return {
    login: '/api/login',
    logout: '/api/logout',
  };
}
