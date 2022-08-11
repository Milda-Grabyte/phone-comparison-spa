import { CartItemDTO } from '../infrastructure/dto/CartItem.dto';

const input = {
  colorCode: '1000',
  id: 'CbrppwKzpqRq_ScJDRbEy',
  storageCode: '2000'
};

describe('test cart item dto mapper class', () => {
  test('should create object correctly', () => {
    const item = new CartItemDTO(input);
    expect(item).toBeDefined();
    expect(item.item.storageCode).toBe('2000');
  });

  test('should return error message', () => {
    const item = new CartItemDTO('Hello');
    expect(item).toBeDefined();
    expect(item.item).toBe('Error adding item to cart');
  });
});
