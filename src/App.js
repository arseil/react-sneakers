import { useEffect, useState } from 'react';
import { Card } from './components/Card';
import { Cart } from './components/Cart';
import { getSneakers } from './services/shopApi';
import styles from './App.module.scss';
import { Header } from './components/Header';
import { useCart } from './hooks/useCart';

export function App() {
  const [sneakers, setSneakers] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const {
    cartItems,
    total,
    loadError: cartLoadError,
    actionError,
    addToCart,
    removeFromCart,
  } = useCart();

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const onCartClose = () => {
    setIsCartOpen(false);
  };

  const onChangeSearchInput = event => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const controller = new AbortController();

    const loadSneakers = async () => {
      try {
        const data = await getSneakers(controller.signal);

        setSneakers(data);
      } catch (error) {
        if (controller.signal.aborted) return;

        console.error('Ошибка загрузки товаров:', error);
        setIsError(true);
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    loadSneakers();

    return () => controller.abort();
  }, []);

  if (isError) {
    return (
      <div className={styles.statusScreen}>
        <h2 className={styles.errorMessage}>Error</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={styles.statusScreen}>
        <h2>Loading</h2>
      </div>
    );
  }

  const filteredSneakers = sneakers.filter(item =>
    item.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className={styles.wrapper}>
      {(actionError || cartLoadError) && (
        <p role="alert" className={styles.errorMessage}>
          {actionError || cartLoadError}
        </p>
      )}

      {isCartOpen && (
        <Cart
          onCartClose={onCartClose}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          total={total}
        />
      )}

      <Header toggleCart={toggleCart} total={total} />

      <main className={styles.content}>
        <div className={styles.catalogHeader}>
          <h1 className={styles.catalogTitle}>
            {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
          </h1>

          <div className={styles.searchBlock}>
            <img
              className={styles.searchIcon}
              src="/img/search.svg"
              alt=""
              width={18}
              height={18}
            />

            <input
              className={styles.searchInput}
              type="text"
              placeholder="Поиск..."
              onChange={onChangeSearchInput}
              value={searchValue}
            />

            {searchValue && (
              <button
                type="button"
                className={styles.clearSearchButton}
                onClick={() => setSearchValue('')}
                aria-label="Очистить поиск"
              >
                <img
                  className={styles.clearSearchIcon}
                  src="/img/btn-remove.svg"
                  alt=""
                  width={32}
                  height={32}
                />
              </button>
            )}
          </div>
        </div>

        <div className={styles.cards}>
          {filteredSneakers.length > 0 ? (
            filteredSneakers.map(item => (
              <Card
                key={item.id}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                id={item.id}
                addToCart={addToCart}
              />
            ))
          ) : (
            <div className={styles.emptyState}>
              {searchValue ? 'Ничего не найдено' : 'Товаров пока нет'}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
