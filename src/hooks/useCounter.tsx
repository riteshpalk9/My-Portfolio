
import { useState, useEffect } from 'react';

type CounterType = 'visitors' | 'downloads';

export const useCounter = (type: CounterType) => {
  const [count, setCount] = useState(0);
  const storageKey = `counter-${type}`;

  useEffect(() => {
    // Retrieve the current count from localStorage
    const storedCount = localStorage.getItem(storageKey);
    const initialCount = storedCount ? parseInt(storedCount, 10) : 0;
    
    // For visitors, increment the count on mount (once per session)
    if (type === 'visitors') {
      const hasVisited = sessionStorage.getItem('has-visited');
      
      if (!hasVisited) {
        const newCount = initialCount + 1;
        localStorage.setItem(storageKey, newCount.toString());
        sessionStorage.setItem('has-visited', 'true');
        setCount(newCount);
      } else {
        setCount(initialCount);
      }
    } else {
      setCount(initialCount);
    }
  }, [storageKey, type]);

  const increment = () => {
    const newCount = count + 1;
    localStorage.setItem(storageKey, newCount.toString());
    setCount(newCount);
  };

  return { count, increment };
};
