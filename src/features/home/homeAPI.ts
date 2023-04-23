export async function fetchSearchResults(text: string) {
  const response = await fetch(
    `http://hn.algolia.com/api/v1/search?query=${text}`
  );
  const json = await response.json();
  return json;
}
