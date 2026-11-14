import { Card } from './components/Card';
import { Drawer } from './components/Drawer';
import { Header } from './components/Header';

export function App() {
  return (
    <div className="wrapper clear">
      <Drawer />

      <Header />

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
