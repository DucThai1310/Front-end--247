import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import CartModal from '../CartModal';
import './style.css';
function Header(props) {
  const { carts, setCarts } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className='header'>
      Header
      <button onClick={() => setIsOpenModal(!isOpenModal)}>
        <FontAwesomeIcon icon={faShoppingCart} fontSize={20} color='white' />
        <span>{carts.length}</span>
      </button>
      {isOpenModal && <CartModal setVisible={setIsOpenModal} carts={carts} setCarts={setCarts} />}
    </div>
  );
}

export default Header;
