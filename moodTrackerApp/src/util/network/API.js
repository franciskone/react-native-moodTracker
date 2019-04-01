import { endpoint, httpClient } from './config';

export const API = {
  getInsights,
  postCheckIn,
};

function getInsights() {
  return httpClient.get(endpoint.INSIGHTS);
}

function postCheckIn(data = {
  moodLevel: 4,
  feelingSelectedList: [],
  comment: null,
}) {
  return httpClient.post(endpoint.CHECK_IN, data);
}
