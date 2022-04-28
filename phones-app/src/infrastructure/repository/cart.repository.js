import { cartItemDTO } from '../dto/cartItem.dto';
import { api } from '../router/api/api';

export const cartRepository = {
  post: async (cartItem) => {
    const confirmedItem = new cartItemDTO(cartItem);
    const count = await api.post('api/cart', confirmedItem.item);
    return count;
  },
};
