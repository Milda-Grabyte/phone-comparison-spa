import { cartRepository } from '../infrastructure/repository/cart.repository';

const input = {
  colorCode: '1000',
  id: 'CbrppwKzpqRq_ScJDRbEy',
  storageCode: '2000'
};

describe('test cart repository', () => {
  test('should return cart count', async () => {
    const count = await cartRepository.post(input);
    expect(count).toBe(1);
  });
});
