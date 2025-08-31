import { useEffect, useState } from "react";

/**
 * useLocalStorage hook
 * key - localStorage key
 * initialValue - default
 */
export default function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      if (state === undefined) return;
      localStorage.setItem(key, JSON.stringify(state));
    } catch {}
  }, [key, state]);

  const remove = () => {
    try {
      localStorage.removeItem(key);
      setState(initialValue);
    } catch {}
  };

  return [state, setState, remove];
}
