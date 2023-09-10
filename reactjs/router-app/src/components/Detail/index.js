import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail(props) {
  const params = useParams();
  console.log("🚀 ~ file: index.js:6 ~ Detail ~ params:", params)
  const [product, setProduct] = useState(undefined);
  useEffect(() => {
    if (params.id) {
      fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then(res => res.json())
        .then(json => setProduct(json));
    }
  }, [params.id]);
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
