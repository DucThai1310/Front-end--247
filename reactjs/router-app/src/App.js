import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Detail from './components/Detail';
import Cart from './components/Cart';
import PublicLayout from './layout/Public';
import PrivateLayout from './layout/Private';
import AdminPage from './Page/Admin';
import Login from './Page/Login';
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
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PublicLayout carts={carts} setCarts={setCarts} />,
      children: [
        {
          path: '/',
          element: <ProductList products={products} addCard={addCard} />,
        },
        {
          path: '/detail/:id',
          element: <Detail />,
        },
        {
          path: '/carts',
          element: <Cart />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/admin',
      element: <PrivateLayout carts={carts} setCarts={setCarts} />,
      children: [
        {
          path: '/admin',
          element: <AdminPage />,
        },
      ],
    },
  ]);
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
