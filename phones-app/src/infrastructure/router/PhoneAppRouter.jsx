import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from '../../App';
import ProductDetailPage from '../pages/ProductDetailPage';
import ProductListPage from '../pages/ProductListPage';

function PhoneAppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ProductListPage />} />
        <Route path='/' element={<App />}>
          <Route path='all' element={<ProductListPage />} />
          <Route path=':productId' element={<ProductDetailPage />} />
        </Route>
        <Route path='*' element={<Link to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PhoneAppRouter;