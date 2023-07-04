import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
function Product(props) {
  const { id, title, price, image, addCard } = props;
  return (
    <div className='product'>
      <div className='product__image'>
        <img src={image}></img>
      </div>
      <div className='product__title'>
        <Link to={`/detail/${id}`}>{title}</Link>
      </div>
      <div className='product__price'>{price}$</div>
      <div className='product__add'>
        <button onClick={() => addCard(id)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
