import { helpers } from '../../infrastructure/helpers/helpers';

export const persistData = {

  setWithExpiry(key, value, ttl) {
    const item = {
      value: value,
      expiry: helpers.addHours(ttl),
    };
    localStorage.setItem(key, JSON.stringify(item));
  },

  getWithExpiry(key) {
    const itemString = localStorage.getItem(key);

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