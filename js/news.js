fetch(" https://openapi.programming-hero.com/api/news/category/01")
  .then((response) => response.json())
  //   .then((json) => console.log(json.data))
  .catch((error) => {
    console.error(error);
  });

const newsArrs = json.data;
console.log(newsArrs);
for (const news of newsArrs) {
  console.log(news);
}
