const BASE_URL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const KEY = '&key=FMG87XEJRQ8HVYYWFE95X3QJX&contentType=json';

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
