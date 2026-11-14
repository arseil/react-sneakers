export function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <div className="d-flex justify-between align-center mb-30">
          <h2>Корзина</h2>
          <img
            src="/img/btn-remove.svg"
            alt="remove"
            width={32}
            height={32}
            className="removeBtn"
          />
        </div>
        <div className="items">
          <div className="cartItem d-flex justify-between align-center mb-20">
            <div
              className="cartItemImg"
              style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
            ></div>
            <div className="mr-20 d-flex flex-column">
              <h5 className="mb-10">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <span className="font-bold">12 999 руб.</span>
            </div>
            <img
              src="/img/btn-remove.svg"
              alt="remove"
              width={32}
              height={32}
              className="removeBtn"
            />
          </div>
          <div className="cartItem d-flex justify-between align-center mb-20">
            <div
              className="cartItemImg"
              style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
            ></div>
            <div className="mr-20 d-flex flex-column">
              <h5 className="mb-10">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <span className="font-bold">12 999 руб.</span>
            </div>
            <img
              src="/img/btn-remove.svg"
              alt="remove"
              width={32}
              height={32}
              className="removeBtn"
            />
          </div>
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
