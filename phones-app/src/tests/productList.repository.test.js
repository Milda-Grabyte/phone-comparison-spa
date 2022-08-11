import { productRepository } from "../infrastructure/repository/productList.repository";

const output = {
    "id": "ND1elEt4nqZrCeFflDUZ2",
    "brand": "Acer",
    "model": "Liquid X2",
    "price": "230",
    "image": "https://front-test-api.herokuapp.com/images/ND1elEt4nqZrCeFflDUZ2.jpg"
}

describe('test product list repository', () => {
    test('should return full product list', async () => {
      const list = await productRepository.get();
      expect(list[4]).toEqual(output);
      expect(list[5]).not.toEqual(output);
    });
  });