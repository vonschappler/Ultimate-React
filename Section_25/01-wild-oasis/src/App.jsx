import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Button onClick={() => alert('Check in')}>Check in</Button>
        <Button onClick={() => alert('Check out')}>Check out</Button>
        <Input type='number' placeholder='Number of guests' />
      </StyledApp>
    </>
  );
}

export default App;
