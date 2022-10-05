import { useEffect } from 'react';

export const useCustomClick = (ref) => {
  useEffect(() => {
    const handleClick = (event) => {
      console.log('Button clicked');
    };

    const element = ref.current;

    element.addEventListener('click', handleClick);

    // 👇️ remove the event listener when component unmounts
    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, [ref]);
};
