import { helpers } from '../../infrastructure/helpers/helpers';

export const persistData = {

  setWithExpiry(key, value, ttl, productId = '') {
    const item = {
      value: value,
      expiry: helpers.addHours(ttl),
    };
    localStorage.setItem(helpers.keyOrId(key, productId), JSON.stringify(item));
  },

  getWithExpiry(key, productId = '') {
    const itemString = localStorage.getItem(helpers.keyOrId(key, productId));

    if (!itemString) {
      return null;
    }

    const item = JSON.parse(itemString);
    const now = new Date();

    if (now > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  }
}