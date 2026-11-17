import { useEffect, useState } from 'react';
import { getCart, addCartItem, removeCartItem } from '../services/shopApi';

export function useCart() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  const [actionError, setActionError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const loadCart = async () => {
      try {
        const data = await getCart(controller.signal);

        setCartItems(data);
      } catch (error) {
        if (controller.signal.aborted) return;

        console.error('Ошибка загрузки корзины:', error);
        setLoadError('Не удалось загрузить корзину');
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    loadCart();

    return () => controller.abort();
  }, []);

  const addToCart = async product => {
    setActionError('');

    try {
      const newItem = await addCartItem(product);

      setCartItems(prev => [...prev, newItem]);

      return true;
    } catch (error) {
      console.error('Ошибка добавления товара:', error);
      setActionError('Не удалось добавить товар в корзину');

      return false;
    }
  };

  const removeFromCart = async id => {
    setActionError('');

    try {
      await removeCartItem(id);

      setCartItems(prev => prev.filter(item => item.id !== id));

      return true;
    } catch (error) {
      console.error('Ошибка удаления товара:', error);
      setActionError('Не удалось удалить товар из корзины');

      return false;
    }
  };

  const total = cartItems.reduce((sum, item) => sum + Number(item.price), 0);

  return {
    cartItems,
    total,
    isLoading,
    loadError,
    actionError,
    addToCart,
    removeFromCart,
  };
}
