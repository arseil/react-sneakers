import { useState, useRef, useEffect } from 'react';
import styles from './Card.module.scss';

export function Card({ title, price, imageUrl, id, addToCart }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const timerRef = useRef(null);

  const onFavorite = () => {
    setIsFavorite(prev => !prev);
  };

  const onPlus = async () => {
    const success = await addToCart({ title, price, imageUrl, id });

    if (!success) return;

    setIsAdded(true);

    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className={styles.card}>
      <button
        type="button"
        className={styles.favoriteButton}
        onClick={onFavorite}
        aria-label={isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
        aria-pressed={isFavorite}
      >
        <img
          src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}
          alt=""
          width={32}
          height={32}
        />
      </button>

      <img src={imageUrl} alt="sneaker" width={133} height={112} />

      <h5 className={styles.productTitle}>{title}</h5>

      <div className={styles.cardFooter}>
        <div className={styles.priceBlock}>
          <span className={styles.priceLabel}>Цена:</span>
          <b className={styles.priceValue}>{price} руб.</b>
        </div>

        <button
          type="button"
          className={styles.addButton}
          onClick={onPlus}
          aria-label="Добавить товар в корзину"
        >
          <img
            className={`${styles.addIcon} ${!isAdded ? styles.visible : ''}`}
            src="/img/btn-plus.svg"
            alt=""
            width={32}
            height={32}
          />

          <img
            className={`${styles.addIcon} ${styles.checkedIcon} ${isAdded ? styles.visible : ''}`}
            src="/img/btn-checked.svg"
            alt=""
            width={32}
            height={32}
          />
        </button>
      </div>
    </div>
  );
}
