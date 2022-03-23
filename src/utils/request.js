export default function request(url, options) {
  return fetch(url, options).then((response) => {
    return response.json();
  });
}
