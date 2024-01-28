import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm';
import UpdateUserPasswordForm from '../features/authentication/UpdatePasswordForm';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Account() {
  return (
    <>
      <Heading as='h1'>Update your account</Heading>

      <Row>
        <Heading as='h3'>Update user data</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as='h3'>Update password</Heading>
        <UpdateUserPasswordForm />
      </Row>
    </>
  );
}

export default Account;
