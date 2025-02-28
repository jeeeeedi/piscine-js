async function getJSON(path, params = {}) {
  try {
    const paramString = new URLSearchParams(params).toString();
    const url = `${path}?${paramString}`;

    // Fetch data
    const response = await fetch(url);

    // Handle HTTP errors
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // Parse JSON
    const result = await response.json();

    // Handle API errors
    if (result.error) {
      throw new Error(result.error);
    }

    return result.data;
  } catch (error) {
    throw error;
  }
}
