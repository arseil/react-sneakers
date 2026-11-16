import { useEffect } from 'react';
import { CartItem } from './CartItem';
import axios from 'axios';

export function Cart({ onCartClick, cartItems, onRemoveItemCart, setCartItems, total }) {
  const tax = (total * 0.05).toFixed(2);
  useEffect(() => {
    axios.get('https://6afb0955730c1d152f32f8ad.mockapi.io/api/v1/cart').then(res => {
      setCartItems(res.data);
    });
  }, [setCartItems]);

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
            cartItems.map(item => {
              return (
                <CartItem
                  title={item.title}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  key={item.id}
                  id={item.id}
                  onRemoveItemCart={onRemoveItemCart}
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
              <b>{total || '0.00'} руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>{tax} руб.</b>
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
