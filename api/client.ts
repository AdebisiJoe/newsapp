import { create } from 'apisauce';
const ACCESS_KEY='56353d59ca0e100b2e6273cc279fbd6c';

// define the api
const apiClient = create({
  baseURL: `http://api.mediastack.com/v1`,
});

export default apiClient;