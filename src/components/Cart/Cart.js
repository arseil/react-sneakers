import { CartItem } from './CartItem';

export function Cart({ onCartClick, cartItems }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="d-flex justify-between align-center mb-30">
          <h2>Корзина</h2>
          <img
            src="/img/btn-remove.svg"
            alt="remove"
            width={32}
            height={32}
            className="removeBtn"
            onClick={onCartClick}
          />
        </div>
        <div className="items">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => {
              return (
                <CartItem
                  title={item.title}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  key={index}
                />
              );
            })
          ) : (
            <div className="d-flex justify-center align-center w100p h100p">Empty</div>
          )}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1 074 руб.</b>
            </li>
          </ul>

          <button className="greenButton">
            <span>Оформить заказ</span>
            <img src="/img/arrow.svg" alt="arrow" width={11} height={11} />
          </button>
        </div>
      </div>
    </div>
  );
}
