const headers = {
  'Content-Type': 'application/json'
};
const baseUrl = 'https://front-test-api.herokuapp.com/';

const get = async (url) => {
  const fullUrl = `${baseUrl}${url}`;
  const response = await fetch(fullUrl, {
    method: 'GET',
    headers
  });
  return await response.json();
};

const post = async (url, data) => {
  const fullUrl = `${baseUrl}${url}`;
  const response = await fetch(fullUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  });
  return await response.json();
};

export const api = {
  get,
  post
};
