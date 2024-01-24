import { useRef, useEffect } from 'react';

function useOutsideClick(handler, listenWhenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      document.addEventListener('click', handleClick, listenWhenCapturing);
      return () =>
        document.removeEventListener('click', handleClick, listenWhenCapturing);
    },
    [handler, listenWhenCapturing]
  );
  return ref;
}

export default useOutsideClick;
