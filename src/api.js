const API_KEY = "m6YlL5WyMzEyxxi1F1bzFUDnbucvRjk16B74Zx121NM";
const baseURL = "https://api.unsplash.com/search/photos/";
const defaultUrl = `${baseURL}?client_id=${API_KEY}&query=ducks`;

export const fetchPicturesUrl = async (url = defaultUrl) => {
  const result = await fetch(url);
  const data = await result.json();
  const links = result.headers.get("Link").match(/(?<=<).*?(?=>)/g);
  return {
    images: data.results || data,
    prev: links.length === 2 ? links[0] : links[1],
    next: links.length === 2 ? links[1] : links[3],
  };
};

export const fetchPicturesTerm = async (term) => {
  const url = `${baseURL}?client_id=${API_KEY}&query=${term}`;
  return fetchPicturesUrl(url);
};
