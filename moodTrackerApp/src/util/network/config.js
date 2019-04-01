import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getInsightsSuccess, postCheckInSuccess } from './mock';

const USE_MOCK = true; // TODO franciskone: add ENV value

export const endpoint = {
  INSIGHTS: '/insights',
  CHECK_IN: '/checkIn',
};

const axiosInstance = axios.create({
  timeout: 60000,
  baseURL: '', // TODO franciskone: add ENV values
});

if (USE_MOCK) {
  const mock = new MockAdapter(axiosInstance, { delayResponse: 500 });
  
  mock.onGet(endpoint.INSIGHTS).reply(() => [
    200,
    getInsightsSuccess(),
  ]);
  
  mock.onPost(endpoint.CHECK_IN).reply(config => [
    200,
    postCheckInSuccess(JSON.parse(config.data)),
  ]);
}

export { axiosInstance as httpClient };
