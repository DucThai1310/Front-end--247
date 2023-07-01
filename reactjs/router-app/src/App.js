import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import Header from './components/Header';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);
  const addCard = productId => {
    const product = products.find(pro => pro.id == productId);
    if (product) {
      const productInCartIndex = carts.findIndex(pro => pro.id == productId);
      if (productInCartIndex == -1) {
        setCarts([...carts, { ...product, amount: 1 }]);
      } else {
        const cartClone = [...carts];
        cartClone[productInCartIndex].amount += 1;
        setCarts(cartClone);
      }
    }
  };
  return (
    <div className='App'>
      <Header carts={carts} />

      <ProductList products={products} addCard={addCard} />
    </div>
  );
}

export default App;
