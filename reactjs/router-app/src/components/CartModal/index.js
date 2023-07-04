import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const CartModal = props => {
  const { setVisible } = props;
  return (
    <div className='cart-modal'>
      Cart modal
      <Link to={'/carts'} onClick={() => setVisible(false)}>
        show more
      </Link>
    </div>
  );
};

export default CartModal;
