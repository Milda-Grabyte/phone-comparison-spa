const joinArray = (arr) => Array.isArray(arr) && arr.join(', ');


const capitalizeWord = (str, allCapsWords) => {
  const capitalizedWord = allCapsWords.includes(str) ? 
    str.toUpperCase() : str[0].toUpperCase() + str.slice(1).toLowerCase();
  return capitalizedWord;
}

const addHours = (numOfHours, date = new Date()) => {
  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
  return date;
}

const keyOrId = (key, productId) => productId ? productId : key;

export const helpers = {
  joinArray,
  capitalizeWord,
  addHours,
  keyOrId
}