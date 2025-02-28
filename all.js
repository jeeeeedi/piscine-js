async function all(obj) {
  const result = {};
  for (const [key, promise] of Object.entries(obj)) {
    result[key] = await promise;
  }
  return result;
}
