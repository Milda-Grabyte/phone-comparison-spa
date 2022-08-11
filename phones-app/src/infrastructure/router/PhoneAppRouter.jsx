import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import App from '../../App';
import Header from '../components/Header';
import ProductDetailPage from '../pages/ProductDetailPage';
import ProductListPage from '../pages/ProductListPage';

function PhoneAppRouter({ cart, setCart, products }) {
  return (
      <BrowserRouter>
      <Header cart={ cart } />
      <Routes>
              <Route index element={ <ProductListPage products={ products } /> } />
              <Route path='/' element={ <App /> } />
              <Route path=':productId' element={ <ProductDetailPage cart={ cart } setCart={ setCart } /> } />
              <Route path='*' element={ <Link to='/' /> } />
          </Routes>
    </BrowserRouter>
  );
}

export default PhoneAppRouter;
