import { helpers } from '../infrastructure/helpers/helpers';
describe('test all helper functions', () => {
  test('test joinAray function', () => {
    const mockArray = ["13 MP", "autofocus"];
    const mockString = '13 MP';
    const transformedMockArray = [...mockArray]
    expect(helpers.joinArray(transformedMockArray)).not.toEqual(mockArray);
    expect(helpers.joinArray(mockString)).toBe(false);
  });

  test('test capitalizeWord function', () => {
    const str1 = 'cpu';
    const str2 = 'resolution';
    const allCapsWords = ['cpu', 'ram', 'os'];
    expect(helpers.capitalizeWord(str1, allCapsWords)).toBe('CPU');
    expect(helpers.capitalizeWord(str2, allCapsWords)).toBe('Resolution');
    expect(helpers.capitalizeWord(str2, allCapsWords)).not.toBe('RESOLUTION');
  });

  test('test addHours function', () => {
    const dateNow = new Date();
    expect(helpers.addHours(1, dateNow)).toBeGreaterThan(1651590889752);
  });

  test('test keyOrId function', () => {
    const key1 = 'product';
    const key2 = 'item';
    const productId1 = undefined;
    const productId2 = 'cGjFJlmqNPIwU59AOcY8H';
    expect(helpers.keyOrId(key1, productId1)).toBe('product');
    expect(helpers.keyOrId(key2, productId2)).toBe('cGjFJlmqNPIwU59AOcY8H');
    expect(helpers.keyOrId(key1, productId2)).not.toBe('product');
  });

   test('test addToCart function', () => {
     const cart = [0, 1, 5];
     const count = 1;
     expect(helpers.addToCart(cart[0], count)).toBe(1);
     expect(helpers.addToCart(cart[1], count)).toBe(2);
     expect(helpers.addToCart(cart[2], count)).toBe(6);
   });
  
  test('test splitString function', () => {
    const str1 = 'Big dogs and small dogs are all great dogs';
    const str2 = 'We love dogs';
    const length1 = 20;
    const length2 = 10;
    expect(helpers.splitString(str1, length1)).toEqual(['Big', 'dogs and small dogs are all great dogs']);
    expect(helpers.splitString(str2, length1)).toBe('We love dogs');
    expect(helpers.splitString(str2, length2)).toEqual(['We', 'love dogs']);
  });
});
