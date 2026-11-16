import { useEffect, useState } from 'react';
import { Card } from './components/Card';
import { Cart } from './components/Cart/Cart';
import { Header } from './components/Header';
// import { sneakersArr } from './mock/mockData';

export function App() {
  const [sneakers, setSneakers] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const onCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const onAddToCart = obj => {
    setCartItems(prev => [...prev, obj]);
  };

  useEffect(() => {
    fetch('https://6afb0955730c1d152f32f8ad.mockapi.io/api/v1/items')
      .then(res => res.json())
      .then(json => {
        setSneakers(json);
        setIsLoading(false);
      })
      .catch(e => {
        setIsError(true);
      });
  }, []);

  if (isError) {
    return (
      <div
        style={{ width: '100vw', height: '100vh' }}
        className="d-flex justify-center align-center"
      >
        <h2 style={{ color: 'red' }}>Error</h2>
      </div>
    );
  }

  return isLoading ? (
    <div style={{ width: '100vw', height: '100vh' }} className="d-flex justify-center align-center">
      <h2>Loading</h2>
    </div>
  ) : (
    <div className="wrapper clear">
      {isCartOpen && <Cart onCartClick={onCartClick} cartItems={cartItems} />}

      <Header onCartClick={onCartClick} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кросовки</h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="search" width={18} height={18} />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="cards">
          {sneakers.map((item, index) => {
            return (
              <Card
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                key={index}
                onAddToCart={obj => onAddToCart(obj)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
