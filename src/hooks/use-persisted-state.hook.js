import React, { useState, useEffect } from "react";

const usePersistedState = (initialValue, localStorageKey) => {
  const [storedValue, setStoredValue] = useState(() => {
    const currentItem = localStorage.getItem(localStorageKey);
    if (currentItem) {
      return JSON.parse(currentItem);
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(storedValue));
  }, [storedValue, localStorageKey]);

  return [storedValue, setStoredValue];
};

export default usePersistedState;
