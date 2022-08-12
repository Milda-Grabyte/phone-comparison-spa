import { ProductListDTO } from '../infrastructure/dto/ProductList.dto';

const input = [
  {
    'id': 'ZmGrkLRPXOTpxsU4jjAcv',
    'brand': 'Acer',
    'model': 'Iconia Talk S',
    'price': '170',
    'imgUrl': 'https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg'
  },
  {
    'id': 'cGjFJlmqNPIwU59AOcY8H',
    'brand': 'Acer',
    'model': 'Liquid Z6 Plus',
    'price': '250',
    'imgUrl': 'https://front-test-api.herokuapp.com/images/cGjFJlmqNPIwU59AOcY8H.jpg'
  }
];

describe('test product list dto mapper class', () => {
  test('should create array of objects correctly', () => {
    const item = new ProductListDTO(input);
    expect(item).toBeDefined();
    expect(item.products[1].model).toBe('Liquid Z6 Plus');
  });

  test('should return error message', () => {
    const item = new ProductListDTO('Hello');
    expect(item).toBeDefined();
    expect(item.products).toBe('Product list not found');
  });
});
