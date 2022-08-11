import { api } from '../api/api';
import { ItemDTO } from '../dto/Item.dto';

export const itemRepository = {
  get: async (productId) => {
    const item = await api.get(`api/product/${productId}`);
    const confirmedItem = new ItemDTO(item);
    return confirmedItem.item;
  }
};
