const request = (url: string) => {
  return fetch(url).then((response) => response.json());
};
export default request;
