import { useMutation } from '@tanstack/react-query';
import { signUp as signUpApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useSignUp() {
  const { mutate: signUp, isLoading: isCreatingUser } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signUpApi({ fullName, email, password }),
    onSuccess: (data) => {
      console.log(data);
      toast.success(
        `New user created with success. Please verify the account by accessing the new user's email!`
      );
    },
    onError: (err) => {
      console.error(err);
      toast.error(`Unable to create a new user`);
    },
  });

  return { signUp, isCreatingUser };
}
