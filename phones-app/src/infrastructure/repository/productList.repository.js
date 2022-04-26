
import { ProductListDTO } from '../dto/ProductList.dto'
import { api } from '../router/api/api'

export const productRepository = {
  getProducts: async () => {
    const products = await api.get('api/product');
    const confirmedList = new ProductListDTO(products);
    return confirmedList.products;
  }
}