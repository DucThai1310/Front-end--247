import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const CartModal = props => {
  const { setVisible, carts, setCarts } = props;
  const changeAmount = (id, status) => {
    const cartIndex = carts.findIndex(cart => cart.id == id);
    if (cartIndex > -1) {
      const cloneCarts = [...carts];
      if (status == '+') {
        cloneCarts[cartIndex].amount++;
      } else {
        if (cloneCarts[cartIndex].amount > 1) {
          cloneCarts[cartIndex].amount--;
        } else {
          cloneCarts.splice(cartIndex, 1);
        }
      }
      setCarts(cloneCarts);
    }
  };
  const deleteCart = id => {
    const cartIndex = carts.findIndex(cart => cart.id == id);
    if (cartIndex > -1) {
      const cloneCarts = [...carts];
      cloneCarts.splice(cartIndex, 1);
      setCarts(cloneCarts);
    }
  };
  return (
    <div className='cart-modal'>
      <h2 className='cart-title'>Cart</h2>
      {carts.slice(0, 4).map(cart => {
        return (
          <div className='cart-item' key={cart.id}>
            <div className='cart-item__image'>
              <img src={cart.image} alt='' />
            </div>
            <div className='cart-item__info'>
              <div className='row'>
                <div className='cart-item__name'>{cart.title}</div>
                <div className='total'>${(cart.price * cart.amount).toFixed(1)}</div>
              </div>
              <div className='row'>
                <div className='price'>${cart.price}</div>
              </div>
              <div className='row'>
                <div className='cart-item__amount'>
                  <button onClick={() => changeAmount(cart.id, '-')}>-</button>
                  {cart.amount}
                  <button onClick={() => changeAmount(cart.id, '+')}>+</button>
                </div>
                <div className='cart-item__delete' onClick={() => deleteCart(cart.id)}>
                  <FontAwesomeIcon icon={faTrash} color='#989898' fontSize={'13px'} />
                  <span>Delete</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      { carts.length == 0 && <div>You not select product !</div>}
      {carts.slice(4, 5).length ? (
        <Link to={'/carts'} onClick={() => setVisible(false)}>
          show more
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CartModal;
