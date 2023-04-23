export async function fetchSearchResults(text: string = "", page: number = 0) {
  const response = await fetch(
    `http://hn.algolia.com/api/v1/search?query=${text}&page=${page}`
  );
  const json = await response.json();
  console.log(json);
  return json;
}
