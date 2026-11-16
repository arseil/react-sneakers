export function CartItem({ title, price, imageUrl, id, onRemoveItemCart }) {
  return (
    <div className="cartItem d-flex justify-between align-center mb-20">
      <div className="cartItemImg" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="mr-20 d-flex flex-column">
        <h5 className="mb-10">{title}</h5>
        <span className="font-bold">{price} руб.</span>
      </div>
      <img
        src="/img/btn-remove.svg"
        alt="remove"
        width={32}
        height={32}
        className="removeBtn"
        onClick={() => onRemoveItemCart(id)}
      />
    </div>
  );
}
