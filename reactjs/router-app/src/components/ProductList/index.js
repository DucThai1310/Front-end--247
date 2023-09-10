import React from 'react';
import Product from '../Product';
import "./style.css"
function ProductList( props ) {
  const { products, addCard } = props;
  return (
    <>
      <h3>Product List</h3>
      <div className='product__list'>
        {products.map(product => (
          <Product key={product.id} {...product} addCard={addCard} />
        ))}
      </div>
    </>
  );
}

export default ProductList;