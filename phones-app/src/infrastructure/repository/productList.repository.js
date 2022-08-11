
import { api } from '../api/api';
import { ProductListDTO } from '../dto/ProductList.dto';

export const productRepository = {
  get: async () => {
    const products = await api.get('api/product');
    const confirmedList = new ProductListDTO(products);
    return confirmedList.products;
  }
};
