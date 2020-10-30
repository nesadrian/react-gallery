const API_KEY = "m6YlL5WyMzEyxxi1F1bzFUDnbucvRjk16B74Zx121NM";
const baseURL = "https://api.unsplash.com/";
const defaultUrl = `${baseURL}search/photos/?client_id=${API_KEY}&query=ducks`;

export const fetchPicturesUrl = async (url = defaultUrl) => {
  try {
    const result = await fetch(url);
    const data = await result.json();
    const links = result.headers.get("Link").match(/(?<=<).*?(?=>)/g);
    return {
      images: data.results || data,
      prev: links.length === 2 ? links[0] : links[1],
      next: links.length === 2 ? links[1] : links[3],
    };
  }
  catch (err) {
    return {
      error: err.message
    }
  }
};

export const fetchPicturesTerm = async (term) => {
  const url = `${baseURL}search/photos/?client_id=${API_KEY}&query=${term}`;
  const data = await fetchPicturesUrl(url)
  const dataWithTerm = { ...data, search: term };
  return dataWithTerm;
};

export const fetchPicturesRandom = async () => {
  const url = `${baseURL}photos/random/?client_id=${API_KEY}&count=10`
  const result = await fetch(url);
  const data = await result.json();
  return {
    images: data.results || data
  }
}
