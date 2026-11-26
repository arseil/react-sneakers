import { useEffect, useState } from 'react';
import { getSneakers } from '../services/shopApi';

export function useSneakers() {
  const [sneakers, setSneakers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const loadSneakers = async () => {
      try {
        const data = await getSneakers(controller.signal);

        setSneakers(data);
      } catch (error) {
        if (controller.signal.aborted) return;

        console.error('Ошибка загрузки товаров:', error);
        setError('Не удалось загрузить товары');
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    loadSneakers();

    return () => controller.abort();
  }, []);

  return {
    sneakers,
    isLoading,
    error,
  };
}
