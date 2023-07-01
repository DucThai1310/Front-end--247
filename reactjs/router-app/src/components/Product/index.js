import React from 'react';
import "./style.css"
function Product(props) {
  const { id, title, price, image, addCard } = props;
  return (
    <div className='product'>
      <div className='product__image'>
        <img src={image}></img>
      </div>
      <div className='product__title'>{title}</div>
      <div className='product__price'>{price}$</div>
      <div className='product__add'>
        <button onClick={() => addCard(id)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
