import { useEffect, useCallback } from 'react';

interface Props {
  ref: React.RefObject<HTMLElement>;
  callback: () => void;
}

const useOutsideClick = ({ ref, callback }: Props): void => {
  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    },
    [ref, callback]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      handleClick(event);
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClick, ref]);
};

export default useOutsideClick;
