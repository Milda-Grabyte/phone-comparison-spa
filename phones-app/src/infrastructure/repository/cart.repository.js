import { CartItemDTO } from '../dto/CartItem.dto';
import { api } from '../api/api';

export const cartRepository = {
  post: async (cartItem) => {
    const confirmedItem = new CartItemDTO(cartItem);
    const count = await api.post('api/cart', confirmedItem.item);
    return count.count;
  },
};
