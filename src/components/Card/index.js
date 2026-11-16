import { useState } from 'react';
import cardStyles from './Card.module.scss';

export function Card({ title, price, imageUrl }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const [isAdded, setIsAdded] = useState(false);

  const onFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const onPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.favorite}>
        <img
          onClick={onFavorite}
          src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}
          alt="heart"
          width={32}
          height={32}
        />
      </div>
      <img src={imageUrl} alt="sneaker" width={133} height={112} />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt="plus"
          width={32}
          height={32}
          onClick={onPlus}
          className={cardStyles.plus}
        />
      </div>
    </div>
  );
}
