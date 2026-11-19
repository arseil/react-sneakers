import { useState } from 'react';

import { Header } from './components/Header';
import { Cart } from './components/Cart';
import { Catalog } from './components/Catalog';
import { ErrorToast } from './components/ErrorToast/ErrorToast';

import { useCart } from './hooks/useCart';
import { useSneakers } from './hooks/useSneakers';
import { useErrorToast } from './hooks/useErrorToast';

import styles from './App.module.scss';

export function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { sneakers, isLoading, error: sneakersError } = useSneakers();

  const {
    cartItems,
    total,
    loadError: cartLoadError,
    actionError,
    addToCart,
    removeFromCart,
  } = useCart();

  const errorToast = useErrorToast(actionError, cartLoadError);

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const onCartClose = () => {
    setIsCartOpen(false);
  };

  if (sneakersError || isLoading) {
    return (
      <>
        <ErrorToast key={errorToast.id} message={errorToast.message} />

        <div className={styles.statusScreen}>
          {sneakersError ? (
            <h2 className={styles.statusError}>{sneakersError}</h2>
          ) : (
            <h2>Loading</h2>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <ErrorToast key={errorToast.id} message={errorToast.message} />

      <div className={styles.wrapper}>
        {isCartOpen && (
          <Cart
            onCartClose={onCartClose}
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            total={total}
          />
        )}

        <Header toggleCart={toggleCart} total={total} />

        <Catalog sneakers={sneakers} addToCart={addToCart} />
      </div>
    </>
  );
}

export default App;
