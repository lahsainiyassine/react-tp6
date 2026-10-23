import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Récupération initiale depuis localStorage (ou valeur par défaut)
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Erreur lecture localStorage pour "${key}":`, error);
      return initialValue;
    }
  });

  // Sauvegarde à chaque changement de clé ou de valeur
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Erreur écriture localStorage pour "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
