export const postCheckInSuccess = data => ({
  ...data,
  id: Math.floor(Math.random() * 1000000),
});
