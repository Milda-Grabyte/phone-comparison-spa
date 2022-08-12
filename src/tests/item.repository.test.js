import { itemRepository } from '../infrastructure/repository/item.repository';

const output = {
  'image': 'https://front-test-api.herokuapp.com/images/zrkx5FlcWhAAtrezpcwiP.jpg',
  'brand': 'Acer',
  'model': 'Iconia One 8 B1-820',
  'price': '180',
  'cpu': 'Quad-core 1.33 GHz',
  'ram': '1 GB RAM',
  'os': 'Android 5.0 (Lollipop)',
  'resolution': '8.0 inches (~67.9% screen-to-body ratio)',
  'battery': 'Non-removable Li-Ion 4550 mAh battery (17.2 Wh)',
  'cameras': [
    false,
    false
  ],
  'dimensions': '213.9 x 127.7 x 9.5 mm (8.42 x 5.03 x 0.37 in)',
  'weight': '355',
  'sim': 'No',
  'options': {
    'colors': [
      {
        'code': 1000,
        'name': 'Various'
      }
    ],
    'storages': [
      {
        'code': 2000,
        'name': '16 GB'
      },
      {
        'code': 2001,
        'name': '32 GB'
      }
    ]
  }
};

describe('test item repository', () => {
  test('should return item by its ID', async () => {
    const item = await itemRepository.get('zrkx5FlcWhAAtrezpcwiP');
    expect(item).toEqual(output);
  });
});
