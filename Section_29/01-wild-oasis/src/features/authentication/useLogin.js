import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { toast } from 'react-hot-toast';

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      toast.success(`User logged in with success`);
      navigate('/');
    },
    onError: (err) => {
      console.error('Error', err);
      toast.error('Provided e-mail or password are incorrect');
    },
  });

  return { login, isLoggingIn };
}
