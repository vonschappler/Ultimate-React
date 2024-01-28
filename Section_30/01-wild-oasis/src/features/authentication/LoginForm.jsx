import { useState } from 'react';

import Button from '../../ui/Button';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import FormRowVertical from '../../ui/FormRowVertical';
import SpinnerMini from '../../ui/SpinnerMini';

import { useLogin } from './useLogin';

function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { login, isLoggingIn } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label='Email address'>
        <Input
          disabled={isLoggingIn}
          type='email'
          id='email'
          // This makes this form better for password managers
          autoComplete='username'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label='Password'>
        <Input
          disabled={isLoggingIn}
          type='password'
          id='password'
          autoComplete='current-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size='large' disabled={isLoggingIn}>
          {!isLoggingIn ? 'Login' : <SpinnerMini />}
        </Button>
      </FormRowVertical>
      <hr />
      <FormRowVertical>
        <Heading as='p'>
          This is an application developed for test purposes only.
        </Heading>
        <br />
        <Heading as='p'>
          Feel free to test it, with the credentials below:
        </Heading>
        <br />
        <Heading as='p'>Email address: hetev79609@evvgo.com</Heading>
        <Heading as='p'>Password: pass1234</Heading>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
