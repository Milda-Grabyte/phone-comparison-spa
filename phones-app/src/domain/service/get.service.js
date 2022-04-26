import { itemRepository } from '../../infrastructure/repository/item.repository';
import { productRepository } from '../../infrastructure/repository/productList.repository';

export const getService = (dataType, productId) => {
  const repositoryType = dataType === 'product' ? productRepository : itemRepository;
  return repositoryType.get(productId);
};
