import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { toast } from 'react-hot-toast';

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user);
      toast.success(`User logged in with success`);
      navigate('/dashboard', { replace: true });
    },
    onError: (err) => {
      console.error(err);
      toast.error('Provided e-mail or password are incorrect');
    },
  });

  return { login, isLoggingIn };
}
