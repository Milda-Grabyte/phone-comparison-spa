import { cartRepository } from '../../infrastructure/repository/cart.repository';

export const cartService = (cartItem) => {
  return cartRepository.post(cartItem);
};
