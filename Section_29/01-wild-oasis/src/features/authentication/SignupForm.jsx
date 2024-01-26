import { useForm } from 'react-hook-form';

import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';

import { useSignUp } from './useSignUp';

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { signUp, isCreatingUser } = useSignUp();

  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signUp({ fullName, email, password }, { onSettled: () => reset() });
  }

  if (isCreatingUser) return <Spinner />;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label='Full name' error={errors?.fullName?.message}>
        <Input
          disabled={isCreatingUser}
          type='text'
          id='fullName'
          {...register('fullName', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label='Email address' error={errors?.email?.message}>
        <Input
          disabled={isCreatingUser}
          type='email'
          id='email'
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please provide a valid e-mail address',
            },
          })}
        />
      </FormRow>

      <FormRow
        label='Password (min 8 characters)'
        error={errors?.password?.message}
      >
        <Input
          disabled={isCreatingUser}
          type='password'
          id='password'
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: `The password should be at least 8 characters`,
            },
          })}
        />
      </FormRow>

      <FormRow label='Repeat password' error={errors?.passwordConfirm?.message}>
        <Input
          disabled={isCreatingUser}
          type='password'
          id='passwordConfirm'
          {...register('passwordConfirm', {
            required: 'This field is required',
            validate: (value) =>
              value === getValues().password ||
              'Both password inputs need to match',
          })}
        />
      </FormRow>

      <FormRow>
        <Button variation='secondary' type='reset' disabled={isCreatingUser}>
          Cancel
        </Button>
        <Button disabled={isCreatingUser}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
