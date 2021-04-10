import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h3>Shopping Cart </h3>
        </a>
      </div>
      <div>
        <a href="#/cart">
          {' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        
      </div>
    </header>
  );
}
