const BASE_URL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const KEY = `&key=${process.env.REACT_APP_API_KEY}&contentType=json`;

const handleResponse = async (response) => {
  try {
    return await response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const api = {
  get: (endpoint) =>
    fetch(BASE_URL + endpoint + KEY, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(handleResponse)
};
