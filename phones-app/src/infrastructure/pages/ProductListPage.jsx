import React from 'react';
import { useState } from 'react';
import ProductList  from '../components/ProductList';
import Search from '../components/Search';

function ProductListPage({ products }) {
  const [searchValue, setSearchValue] = useState('');
  
  const filteredProducts =
    products.filter(product => {
      if (searchValue === '') {
        return product;
      } else {
        const objectValues = Object.values(product);
        const lowerCaseValues = objectValues.map(value => value.toLowerCase());
        const cleanValues = lowerCaseValues.slice(1, -2)
        return cleanValues.some(clean => clean.includes(searchValue.toLowerCase()));
      }
    });
  
  return (
    <div>
      <Search setSearchValue={setSearchValue}/>
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default ProductListPage;
