import { useEffect, useState } from 'react';
import { getFavorites, addFavorite, removeFavorite } from '../services/shopApi';

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  const [actionError, setActionError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const loadFavorites = async () => {
      try {
        const data = await getFavorites(controller.signal);

        setFavoriteIds(data);
      } catch (error) {
        if (controller.signal.aborted) return;

        console.error('Ошибка загрузки избранного:', error);
        setLoadError('Не удалось загрузить избранное');
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    loadFavorites();

    return () => controller.abort();
  }, []);

  const addToFavorites = async productId => {
    setActionError('');

    try {
      const id = await addFavorite(productId);

      setFavoriteIds(prev => (prev.includes(id) ? prev : [...prev, id]));

      return true;
    } catch (error) {
      console.error('Ошибка добавления в избранное:', error);
      setActionError('Не удалось добавить товар в избранное');

      return false;
    }
  };

  const removeFromFavorites = async productId => {
    setActionError('');

    try {
      await removeFavorite(productId);

      setFavoriteIds(prev => prev.filter(id => id !== productId));

      return true;
    } catch (error) {
      console.error('Ошибка удаления из избранного:', error);
      setActionError('Не удалось удалить товар из избранного');

      return false;
    }
  };

  const toggleFavorite = async productId => {
    if (favoriteIds.includes(productId)) {
      return removeFromFavorites(productId);
    }

    return addToFavorites(productId);
  };

  const isFavorite = productId => favoriteIds.includes(productId);

  return {
    favoriteIds,
    isLoading,
    loadError,
    actionError,
    isFavorite,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
  };
}
