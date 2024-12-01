import {useCallback, useRef} from 'react';

function useDebounce<T extends (...args: any[]) => void>(cb: T, delay: number): (...args: Parameters<T>) => void {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return useCallback((...args: Parameters<T>) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      cb(...args);
    }, delay);

  }, [cb, delay]);
}

export default useDebounce;