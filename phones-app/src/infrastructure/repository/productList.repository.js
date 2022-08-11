
import { ProductListDTO } from '../dto/ProductList.dto'
import { api } from '../api/api'

export const productRepository = {
  get: async () => {
    const products = await api.get('api/product');
    const confirmedList = new ProductListDTO(products);
    return confirmedList.products;
  }
}