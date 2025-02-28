async function getJSON(path, params = {}) {
  const paramString = new URLSearchParams(params).toString();
  const newUrl = `${path}?${paramString}`;

  fetch(newUrl)
    .then((response) => {
      response ? response.json() : response.statusText;
    })
    .catch((error) => {
      throw error;
    });
}
