const pageSize = 10; // 取得したい記事の数

export const getNews = async () => {
  // NewsAPIのトップ記事の情報取得
  const topRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=28a70081913c4a64b18098dfb80b280b`
  );

  const topJson = await topRes.json();
  const topArticles = topJson?.articles;

  return {
    topArticles,
  };
};

export const getTopics = async ({ params }) => {
  const topicRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&category=${params.id}&country=jp&pageSize=${pageSize}&apiKey=28a70081913c4a64b18098dfb80b280b`
  );
  const topicJson = await topicRes.json();
  const topicArticles = await topicJson.articles;

  const title = params.id;

  return {
    topicArticles,
    title,
  };
};

export const getWeather = async () => {
  // 取得したい地域(草津市)の緯度と経度
  const lat = 35.01;
  const lon = 135.58;
  // 取得しない情報
  const exclude = "hourly,minutely";

  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${exclude}&appid=82b7670199f8cb415c840d7c60bafd17`
  );

  const weatherJson = await weatherRes.json();

  return {
    weatherJson,
  };
};

export const getPickup = async () => {
  const keyword = "software"; // 検索したいキーワード
  const sortBy = "popularity"; // 人気順
  const pickupPageSize = 5;

  const pickupRes = await fetch(
    `https://newsapi.org/v2/everything?q=${keyword}&language=jp&sortBy=${sortBy}&pageSize=${pickupPageSize}&apiKey=28a70081913c4a64b18098dfb80b280b`
  );

  const pickupJson = await pickupRes.json();
  const pickupArticles = pickupJson?.articles;

  return {
    pickupArticles,
  };
};
