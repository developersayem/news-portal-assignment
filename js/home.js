const homeUrl = "https://openapi.programming-hero.com/api/news/category/01";
const brekingNewsUrl =
  "https://openapi.programming-hero.com/api/news/category/01";
const regularNewsUrl =
  "https://openapi.programming-hero.com/api/news/category/02";
const internationalNewsUrl =
  "https://openapi.programming-hero.com/api/news/category/03";
const sportsUrl = "https://openapi.programming-hero.com/api/news/category/04";
const entertainmentUrl =
  "https://openapi.programming-hero.com/api/news/category/05";
const cultureUrl = "https://openapi.programming-hero.com/api/news/category/06";
const artsUrl = "https://openapi.programming-hero.com/api/news/category/07";
const allNewsUrl = "https://openapi.programming-hero.com/api/news/category/08";
const defaultNews = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => defaultNewsD(data.data))
    .catch((err) => defaultNewsD(err.message));
  document.getElementById("spinnerContainer").classList.remove("d-none");
};

const defaultNewsD = (allNews) => {
  document.getElementById("newsCounter").innerText = allNews.length;

  const container = document.getElementById("cardContainer");
  container.innerHTML = "";
  for (const news of allNews) {
    console.log(news);
    const newsDiv = document.createElement("div");
    newsDiv.innerHTML = `<div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img class="img-fluid p-3 rounded-3" src="${
                              news.thumbnail_url
                                ? news.thumbnail_url
                                : "No Data Available"
                            }"
                                class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title mt-2 mb-2">${
                                  news.title ? news.title : "No Data Available"
                                }</h5>
                                <p class="card-text text-muted">${
                                  news.details
                                    ? news.details
                                    : "No Data Available"
                                }</p>
                                <div class=" d-flex justify-content-around align-content-center mt-3">
                                    <div class="d-flex ">
                                        <div class="me-2">
                                            <img src="${
                                              news.author.img
                                                ? news.author.img
                                                : "No Data Available"
                                            }" class="img-fluid news-creator-img rounded-circle" alt="">
                                        </div>
                                        <div>
                                            <p class="text-muted news-creator-p m-0">${
                                              news.author.name
                                                ? news.author.name
                                                : "No Data Available"
                                            }</p>
                                            <p class="text-muted news-creator-p m-0">
                                            ${
                                              news.author.published_date
                                                ? news.author.published_date
                                                : "No Data Available"
                                            }</p>
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                        <p class="text-muted m-0">${
                                          news.total_view
                                            ? news.total_view
                                            : "No Views"
                                        }</p>
                                    </div>
                                    <!-- modal start -->
                                    <!-- Button trigger modal -->
                                    <div class="">
                                        <a href="" class="" data-bs-toggle="modal" data-bs-target="#modal1">
                                            <img src="./img/arrow_right.png" alt="">
                                        </a>
                                        <!-- Modalhtml -->
                                        <div class="modal fade" id="modal1" tabindex="-1"
                                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">${
                                                          news.title
                                                            ? news.title
                                                            : "No Data Available"
                                                        }</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div class="mb-4">
                                                            <img src="${
                                                              news.image_url
                                                                ? news.image_url
                                                                : "No Image Available"
                                                            }" class="img-fluid" alt="">
                                                        </div>
                                                        <p>${
                                                          news.details
                                                            ? news.details
                                                            : "No Data Available"
                                                        }</p>
                                                    </div>
                                                    <footer class="mb-4">
                                                        <div class="d-flex justify-content-around">
                                                            <div class=" d-flex justify-content-around">
                                                                <div class="me-2">
                                                                    <img src="${
                                                                      news
                                                                        .author
                                                                        .img
                                                                        ? news
                                                                            .author
                                                                            .img
                                                                        : "No Data Available"
                                                                    }"
                                                                        class="img-fluid news-creator-img" alt="">
                                                                </div>
                                                                <div>
                                                                    <p class="text-muted news-creator-p m-0">${
                                                                      news
                                                                        .author
                                                                        .name
                                                                        ? news
                                                                            .author
                                                                            .name
                                                                        : "No Data Available"
                                                                    }
                                                                    </p>
                                                                    <p class="text-muted news-creator-p m-0">${
                                                                      news
                                                                        .author
                                                                        .published_date
                                                                        ? news
                                                                            .author
                                                                            .published_date
                                                                        : "No Data Available"
                                                                    }</p>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p class="text-muted  m-0">${
                                                                  news.total_view
                                                                    ? news.total_view
                                                                    : "No Views"
                                                                }</p>
                                                            </div>
                                                        </div>
                                                    </footer>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- modal end -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
    container.appendChild(newsDiv);
    // spiner end
    document.getElementById("spinnerContainer").classList.add("d-none");
  }
};
// All button events
defaultNews(homeUrl);
document.getElementById("breakingNews").addEventListener("click", function (e) {
  defaultNews(brekingNewsUrl);
});
document.getElementById("regularNews").addEventListener("click", function (e) {
  defaultNews(regularNewsUrl);
});
document
  .getElementById("internationalNews")
  .addEventListener("click", function (e) {
    defaultNews(internationalNewsUrl);
  });
document.getElementById("sportsNews").addEventListener("click", function (e) {
  defaultNews(sportsUrl);
});
document
  .getElementById("entertainmentNews")
  .addEventListener("click", function (e) {
    defaultNews(entertainmentUrl);
  });
document.getElementById("cultureNews").addEventListener("click", function (e) {
  defaultNews(cultureUrl);
});
document.getElementById("artsNews").addEventListener("click", function (e) {
  defaultNews(artsUrl);
});
document.getElementById("allNews").addEventListener("click", function (e) {
  defaultNews(allNewsUrl);
});
// active buttton functionality
// Get the container element
var btnContainer = document.getElementById("btnContainer");
// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activeBtn");
    current[0].className = current[0].className.replace(" activeBtn", "");
    this.className += " activeBtn";
  });
}
