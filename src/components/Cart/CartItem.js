import styles from './CartItem.module.scss';

export function CartItem({ title, price, imageUrl, id, removeFromCart }) {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={imageUrl} alt={title} width={70} height={70} />

      <div className={styles.details}>
        <h5 className={styles.title}>{title}</h5>
        <span className={styles.price}>{price} руб.</span>
      </div>

      <button
        type="button"
        className={styles.removeButton}
        onClick={() => removeFromCart(id)}
        aria-label={`Удалить ${title} из корзины`}
      >
        <img src="/img/btn-remove.svg" alt="" width={32} height={32} />
      </button>
    </div>
  );
}
