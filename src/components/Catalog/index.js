import { useState } from 'react';
import { Card } from '../Card';
import styles from './Catalog.module.scss';

export function Catalog({ sneakers, addToCart }) {
  const [searchValue, setSearchValue] = useState('');

  const filteredSneakers = sneakers.filter(item =>
    item.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const onChangeSearchInput = event => {
    setSearchValue(event.target.value);
  };

  return (
    <main className={styles.content}>
      <div className={styles.catalogHeader}>
        <h1 className={styles.catalogTitle}>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
        </h1>

        <div className={styles.searchBlock}>
          <img className={styles.searchIcon} src="/img/search.svg" alt="" width={18} height={18} />

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
  );
}
