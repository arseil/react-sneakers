export function Card({ title, price, imageUrl, onFavorite, onPlus, isFavorite }) {
  return (
    <div className="card">
      <div className="favorite">
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
        <button className="button">
          <img onClick={onPlus} src="/img/plus.svg" alt="plus" width={11} height={11} />
        </button>
      </div>
    </div>
  );
}
