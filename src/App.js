import { useEffect, useState } from 'react';
import { Card } from './components/Card';
import { Cart } from './components/Cart/Cart';
import { Header } from './components/Header';
import axios from 'axios';
// import { sneakersArr } from './mock/mockData';

export function App() {
  const [sneakers, setSneakers] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const total = cartItems.reduce((a, b) => a + b.price, 0);

  const onCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const onAddToCart = obj => {
    setCartItems(prev => [...prev, obj]);
    axios.post('https://6afb0955730c1d152f32f8ad.mockapi.io/api/v1/cart', obj);
  };

  const onRemoveItemCart = id => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    axios.delete(`https://6afb0955730c1d152f32f8ad.mockapi.io/api/v1/cart/${id}`);
  };

  const onChangeSearchInput = event => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    // fetch('https://6afb0955730c1d152f32f8ad.mockapi.io/api/v1/items')
    //   .then(res => res.json())
    //   .then(json => {
    //     setSneakers(json);
    //     setIsLoading(false);
    //   })
    //   .catch(e => {
    //     setIsError(true);
    //   });

    axios
      .get('https://6afb0955730c1d152f32f8ad.mockapi.io/api/v1/items')
      .then(res => {
        setSneakers(res.data);
        setIsLoading(false);
      })
      .catch(e => {
        setIsError(true);
      });

    axios.get('https://6afb0955730c1d152f32f8ad.mockapi.io/api/v1/cart').then(res => {
      setCartItems(res.data);
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
      {isCartOpen && (
        <Cart
          onCartClick={onCartClick}
          cartItems={cartItems}
          onRemoveItemCart={onRemoveItemCart}
          setCartItems={setCartItems}
          total={total}
        />
      )}

      <Header onCartClick={onCartClick} total={total} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кросовки'}</h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="search" width={18} height={18} />
            <input
              type="text"
              placeholder="Поиск..."
              onChange={onChangeSearchInput}
              value={searchValue}
            />
            {searchValue && (
              <img
                src="/img/btn-remove.svg"
                alt="remove"
                width={32}
                height={32}
                className="removeBtn"
                onClick={() => setSearchValue('')}
              />
            )}
          </div>
        </div>

        <div className="cards">
          {sneakers.length > 0 ? (
            sneakers
              .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map(item => {
                return (
                  <Card
                    title={item.title}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    id={item.id}
                    key={item.id}
                    onAddToCart={obj => onAddToCart(obj)}
                  />
                );
              })
          ) : (
            <div className="d-flex justify-center align-center w100p h100p">Empty</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
