import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./style.css"
import Cart from '../Cart';
function Header( props ) {
  const { carts } = props;
  const [ isOpenModal, setIsOpenModal ] = useState( false );
  return (
    <div className='header'>
      Header
      <button onClick={()=>setIsOpenModal(!isOpenModal)}>
        <FontAwesomeIcon icon={faShoppingCart} fontSize={20} color='white' />
        <span>{carts.length}</span>
      </button>
      {isOpenModal&&<Cart/>}
    </div>
  );
}

export default Header;