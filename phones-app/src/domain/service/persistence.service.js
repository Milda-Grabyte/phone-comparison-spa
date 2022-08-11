import { helpers } from '../../infrastructure/helpers/helpers';

export const persistData = {

  setWithExpiration(key, value, ttl, productId = '') {
    const item = {
      value: value,
      expiration: helpers.addHours(ttl)
    };
    localStorage.setItem(helpers.keyOrId(key, productId), JSON.stringify(item));
  },

  getWithExpiration(key, productId = '') {
    const itemString = localStorage.getItem(helpers.keyOrId(key, productId));

    if (!itemString) {
      return null;
    }

    const item = JSON.parse(itemString);
    const now = new Date().getTime();
    
    if (now > item.expiration) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  }
};
