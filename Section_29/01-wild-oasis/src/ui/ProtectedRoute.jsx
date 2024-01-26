import styled from 'styled-components';

import Spinner from '../ui/Spinner';

import { useUser } from '../features/authentication/useUser';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoadingUser, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoadingUser) navigate('/login');
  }, [navigate, isAuthenticated, isLoadingUser]);

  if (isLoadingUser)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
