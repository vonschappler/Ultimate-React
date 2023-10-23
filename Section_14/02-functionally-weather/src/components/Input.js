import { useEffect, useRef } from 'react';
import useKeyPress from '../hooks/useKeyPress';

function Input(props) {
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  }, []);

  useKeyPress('Enter', () => {
    input.current.focus();
  });

  useKeyPress('Escape', () => {
    input.current.blur();
  });

  const handleChange = (e) => {
    props.setLocation(e.target.value);
    localStorage.setItem('location', e.target.value);
  };

  return (
    <input
      type='text'
      value={props.location}
      onChange={handleChange}
      placeholder='Enter a location...'
      ref={input}
    />
  );
}

export default Input;
