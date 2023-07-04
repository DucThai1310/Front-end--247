import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail(props) {
  const { id } = useParams('id');
  const [product, setProduct] = useState(undefined);
  console.log('🚀 ~ file: index.js:7 ~ Detail ~ product:', product);
  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(json => setProduct(json));
    }
  }, [id]);
  return (
    <div>
      {product && (
        <div className='product-detail'>
          <div className='product__image'>
            <img src={product.image}></img>
          </div>
          <div className='product__title'>{product.title}</div>
          <div className='product__price'>{product.price}$</div>
          {/* <div className='product__add'>
          <button onClick={() => addCard(id)}>Add to Cart</button>
        </div> */}
        </div>
      )}
    </div>
  );
}

export default Detail;
