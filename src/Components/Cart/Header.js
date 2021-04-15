import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
      
          <h3>Shopping Cart </h3>
      
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
