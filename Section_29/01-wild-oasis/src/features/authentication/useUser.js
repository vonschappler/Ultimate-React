import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiAuth';

export function useUser() {
  const {
    data: user,
    isLoading: isLoadingUser,
    fetchStatus,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });

  return {
    user,
    isLoadingUser,
    isAuthenticated: user?.role === 'authenticated',
    fetchStatus,
  };
}
