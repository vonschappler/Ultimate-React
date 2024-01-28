import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading: isLoggingOut } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      toast.success(`User logged out with success`);
      navigate('/login', { replace: true });
    },
    onError: (err) => {
      console.error(err);
      toast.error(`Unable to log out the current user`);
    },
  });

  return { logout, isLoggingOut };
}
