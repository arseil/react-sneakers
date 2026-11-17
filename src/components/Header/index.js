import styles from './Header.module.scss';

export function Header({ toggleCart, total }) {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <img className={styles.logo} src="/img/logo.png" alt="logo" width={40} height={40} />

        <div className={styles.brandInfo}>
          <h3 className={styles.brandTitle}>React Sneakers</h3>
          <p className={styles.brandDescription}>Магазин лучших кросовок</p>
        </div>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.cartButton} onClick={toggleCart}>
          <img className={styles.cartIcon} src="/img/cart.svg" alt="" width={18} height={18} />

          <span>{total || '0.00'} руб.</span>
        </button>

        <img className={styles.userIcon} src="/img/user.svg" alt="user" width={18} height={18} />
      </div>
    </header>
  );
}
