import { Card } from './components/Card';

export function App() {
  return (
    <div className="wrapper clear">
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

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="/img/logo.png" alt="logo" width={40} height={40} />
          <div className="ml-10">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className="d-flex align-center">
          <li className="mr-30 d-flex align-center">
            <img src="/img/cart.svg" alt="cart" width={18} height={18} />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/user.svg" alt="user" width={18} height={18} />
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кросовки</h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="search" width={18} height={18} />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          <Card
            title="Мужские Кроссовки Nike Blazer Mid Suede"
            price="12 999"
            imageUrl="/img/sneakers/1.jpg"
            onPlus={() => {}}
            isFavorite={false}
          />
          <Card
            title="Мужские Кроссовки Nike Blazer Mid Suede"
            price="12 999"
            imageUrl="/img/sneakers/2.jpg"
            onPlus={() => {}}
            isFavorite={false}
          />
          <Card
            title="Мужские Кроссовки Nike Blazer Mid Suede"
            price="12 999"
            imageUrl="/img/sneakers/3.jpg"
            onPlus={() => {}}
            isFavorite={false}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
