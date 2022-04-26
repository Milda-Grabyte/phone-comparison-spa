import { productRepository } from '../../infrastructure/repository/productList.repository';

export const productService = {
  getProducts: () => {
    return productRepository.getProducts();
  },
};
