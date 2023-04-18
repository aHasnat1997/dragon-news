export const loadedNews = async () => {
  const res = await fetch('news.json');
  const data = await res.json();
  return data;
}
