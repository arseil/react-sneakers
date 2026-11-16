import { useState } from 'react';
import { Card } from './components/Card';
import { Drawer } from './components/Drawer';
import { Header } from './components/Header';
import { sneakersArr } from './mock/mockData';

export function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const onCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="wrapper clear">
      <Drawer isCartOpen={isCartOpen} onCartClick={onCartClick} />

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
          {sneakersArr.map((item, index) => {
            return (
              <Card title={item.title} price={item.price} imageUrl={item.imageUrl} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
