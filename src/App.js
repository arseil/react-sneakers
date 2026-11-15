import { Card } from './components/Card';
import { Drawer } from './components/Drawer';
import { Header } from './components/Header';

const sneakersArr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '12 999',
    imageUrl: '/img/sneakers/1.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: '14 999',
    imageUrl: '/img/sneakers/2.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '8 499',
    imageUrl: '/img/sneakers/3.jpg',
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: '8 999',
    imageUrl: '/img/sneakers/4.jpg',
  },
  {
    title: 'Мужские Кроссовки Under Armour Curry 8',
    price: '15 199',
    imageUrl: '/img/sneakers/5.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Kyrie 7',
    price: '11 299',
    imageUrl: '/img/sneakers/6.jpg',
  },
  {
    title: 'Мужские Кроссовки Jordan Air Jordan 11',
    price: '10 799',
    imageUrl: '/img/sneakers/7.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike LeBron XVIII',
    price: '16 499',
    imageUrl: '/img/sneakers/8.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Lebron XVIII Low',
    price: '13 999',
    imageUrl: '/img/sneakers/9.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
    price: '11 299',
    imageUrl: '/img/sneakers/10.jpg',
  },
];

export function App() {
  const onPlus = title => {
    alert(title);
  };
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

        <div className="cards">
          {sneakersArr.map((item, index) => {
            return (
              <Card
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onPlus={() => onPlus(item.title)}
                isFavorite={false}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
