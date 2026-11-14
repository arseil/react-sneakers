export function Header() {
  return (
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
  );
}
