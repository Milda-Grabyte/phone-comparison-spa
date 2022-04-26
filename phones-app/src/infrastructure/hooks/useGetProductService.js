import React, { useState, useEffect} from 'react';
import { productService } from '../../domain/service/product.service';

export const useGetProductService = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getProducts().then(setProducts);
  }, []);

  return products;
};
