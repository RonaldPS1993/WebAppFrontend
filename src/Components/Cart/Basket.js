import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  //const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice;
  return (
    <aside className="block">
      <h3>Cart Items</h3>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-8">{item.name}</div>
            <div className="col-8">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-8">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-1">Subtotal</div>
              <div className="col-1">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-1">Tax</div>
              <div className="col-1 ">${taxPrice.toFixed(2)}</div>
            
            
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total</strong>
              </div>
              <div className="col-1 ">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row.center">
              <button onClick={() => alert('Cart was saved for later!')}>
                Save cart for later
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
