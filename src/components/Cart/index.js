import { CartItem } from './CartItem';
import cartStyles from './Cart.module.scss';

export function Cart({ onCartClose, cartItems, removeFromCart, total }) {
  const tax = (total * 0.05).toFixed(2);

  return (
    <div className={cartStyles.overlay} onClick={onCartClose}>
      <div className={cartStyles.cart} onClick={e => e.stopPropagation()}>
        <div className={cartStyles.cartHeader}>
          <h2 className={cartStyles.cartTitle}>Корзина</h2>

          <button
            type="button"
            className={cartStyles.closeButton}
            onClick={onCartClose}
            aria-label="Закрыть корзину"
          >
            <img src="/img/btn-remove.svg" alt="" width={32} height={32} />
          </button>
        </div>

        {cartItems.length > 0 ? (
          <>
            <div className={cartStyles.cartItems}>
              {cartItems.map(item => (
                <CartItem
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  id={item.id}
                  removeFromCart={removeFromCart}
                />
              ))}
            </div>

            <div className={cartStyles.cartFooter}>
              <ul className={cartStyles.cartSummaryList}>
                <li className={cartStyles.cartSummaryRow}>
                  <span>Итого:</span>
                  <div className={cartStyles.cartSummaryDivider}></div>
                  <b>{total || '0.00'} руб.</b>
                </li>

                <li className={cartStyles.cartSummaryRow}>
                  <span>Налог 5%:</span>
                  <div className={cartStyles.cartSummaryDivider}></div>
                  <b>{tax} руб.</b>
                </li>
              </ul>

              <button className={`${cartStyles.button} ${cartStyles.checkoutButton}`}>
                <span>Оформить заказ</span>
                <img src="/img/arrow.svg" alt="arrow" className={cartStyles.checkoutArrow} />
              </button>
            </div>
          </>
        ) : (
          <div className={cartStyles.cartEmptyWrap}>
            <div className={cartStyles.cartEmpty}>
              <img
                className={cartStyles.cartEmptyImage}
                width="120px"
                src="img/empty-cart.jpg"
                alt="Empty"
              />

              <h2 className={cartStyles.cartEmptyTitle}>Корзина пустая</h2>

              <p className={cartStyles.cartEmptyDescription}>
                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
              </p>

              <button
                onClick={onCartClose}
                className={`${cartStyles.button} ${cartStyles.backButton}`}
              >
                <img src="img/arrow.svg" alt="Arrow" className={cartStyles.backArrow} />
                Вернуться назад
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
