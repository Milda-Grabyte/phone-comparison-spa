const joinArray = (arr) => Array.isArray(arr) && arr.join(', ');

const capitalizeWord = (str, allCapsWords) => {
  const capitalizedWord = allCapsWords.includes(str) ? 
    str.toUpperCase() : str[0].toUpperCase() + str.slice(1).toLowerCase();
  return capitalizedWord;
};

const addHours = (numOfHours, date = new Date()) => {
  return date.getTime() + numOfHours * 60 * 60 * 1000;
};

const keyOrId = (key, productId) => productId ? productId : key;

const addToCart = (cart, count) => cart + count;

const splitString = (string, length) => {
  let splitArray;
  if (string.length >= length) {
    splitArray = string.split(' ');
  } else {
    return string;
  }
  const [word, ...rest] = splitArray;
  return [word, rest.join(' ')];
};

export const helpers = {
  joinArray,
  capitalizeWord,
  addHours,
  keyOrId,
  addToCart,
  splitString
};
