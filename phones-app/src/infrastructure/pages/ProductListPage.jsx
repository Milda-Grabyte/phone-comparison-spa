import React from 'react';
import { ProductList } from '../components/ProductList';

function ProductListPage({products}) {
  return <ProductList products={products} />;
}

export default ProductListPage;
