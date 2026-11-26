import { useEffect, useRef, useState } from 'react';

export function useErrorToast(actionError, cartLoadError) {
  const [toast, setToast] = useState({
    message: '',
    id: 0,
  });

  const errorIdRef = useRef(0);

  const previousErrorsRef = useRef({
    actionError: '',
    cartLoadError: '',
  });

  useEffect(() => {
    const hasNewActionError = actionError && actionError !== previousErrorsRef.current.actionError;

    const hasNewCartError =
      cartLoadError && cartLoadError !== previousErrorsRef.current.cartLoadError;

    previousErrorsRef.current = {
      actionError,
      cartLoadError,
    };

    const message = hasNewActionError ? actionError : hasNewCartError ? cartLoadError : '';

    if (!message) return;

    setToast({
      message,
      id: ++errorIdRef.current,
    });
  }, [actionError, cartLoadError]);

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
