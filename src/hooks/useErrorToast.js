import { useEffect, useRef, useState } from 'react';

export function useErrorToast(
  actionError,
  cartLoadError,
  favoritesActionError = '',
  favoritesLoadError = '',
) {
  const [toast, setToast] = useState({
    message: '',
    id: 0,
  });

  const errorIdRef = useRef(0);

  const previousErrorsRef = useRef({
    actionError: '',
    cartLoadError: '',
    favoritesActionError: '',
    favoritesLoadError: '',
  });

  useEffect(() => {
    const previous = previousErrorsRef.current;

    const hasNewActionError = actionError && actionError !== previous.actionError;

    const hasNewCartError = cartLoadError && cartLoadError !== previous.cartLoadError;

    const hasNewFavoritesActionError =
      favoritesActionError && favoritesActionError !== previous.favoritesActionError;

    const hasNewFavoritesLoadError =
      favoritesLoadError && favoritesLoadError !== previous.favoritesLoadError;

    previousErrorsRef.current = {
      actionError,
      cartLoadError,
      favoritesActionError,
      favoritesLoadError,
    };

    const message = hasNewActionError
      ? actionError
      : hasNewCartError
        ? cartLoadError
        : hasNewFavoritesActionError
          ? favoritesActionError
          : hasNewFavoritesLoadError
            ? favoritesLoadError
            : '';

    if (!message) return;

    setToast({
      message,
      id: ++errorIdRef.current,
    });
  }, [actionError, cartLoadError, favoritesActionError, favoritesLoadError]);

  useEffect(() => {
    if (!toast.message) return;

    const toastId = toast.id;

    const timer = setTimeout(() => {
      setToast(current => (current.id === toastId ? { ...current, message: '' } : current));
    }, 7000);

    return () => clearTimeout(timer);
  }, [toast]);

  return toast;
}
