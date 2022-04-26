import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../../App';
import { VerticalWrapper } from '../../styles/wrapper';
import Header from '../components/Header';
import ProductDetailPage from '../pages/ProductDetailPage';
import ProductListPage from '../pages/ProductListPage';

function PhoneAppRouter({products}) {
  return (
    <BrowserRouter>
      <VerticalWrapper>
        <Header />
        <Routes>
          <Route index element={<ProductListPage products={ products }/>} />
          <Route path='/' element={<App />}>
            <Route path='all' element={<ProductListPage />} />
            <Route path=':productId' element={<ProductDetailPage />} />
          </Route>
          <Route path='*' element={<App />} />
        </Routes>
      </VerticalWrapper>
    </BrowserRouter>
  );
}

export default PhoneAppRouter;