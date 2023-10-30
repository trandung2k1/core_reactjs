import React, { useState } from 'react';
export const useFetch = (url: string) => {
  const [state, setState] = useState<{
    data: unknown[];
    isLoading: boolean;
    error: unknown | null;
  }>({
    data: [],
    isLoading: false,
    error: null,
  });
  React.useEffect(() => {
    (async () => {
      setState((prev) => ({ ...prev, isLoading: true }));
      try {
        const res = await fetch(url);
        const data = await res.json();
        setState((prev) => ({ ...prev, data, isLoading: false }));
      } catch (error) {
        setState((prev) => ({ ...prev, data: [], isLoading: false, error }));
      }
    })();
  }, [url]);
  return { ...state };
};
