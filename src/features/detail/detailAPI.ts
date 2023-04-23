export async function fetchNews(text: string) {
  const response = await fetch(`http://hn.algolia.com/api/v1/items/${text}`);
  const json = await response.json();
  return json;
}
