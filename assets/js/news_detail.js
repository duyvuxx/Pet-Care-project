const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const dataValueTitle = urlParams.get("dataTitle");
const dataValueImg = urlParams.get("dataImg");

const pageDetailTitle = $("head > title");
const detailTitle = $(".news-text > h3");
const detailImg = $(".news-wrapper > img");

function handleNewDetails(val, num) {
  $(detailImg).attr("src", `./assets/imgs/latest_news/news_${num}.jpg`);

  $(detailTitle).text(`${val}`);
  $(pageDetailTitle).text(`${val}`);
}

handleNewDetails(dataValueTitle, dataValueImg);

function start() {
  homePage();
  changePost();
}

start();

// Switch to Homepage
function homePage() {
  const wrapper = $(".header-nav-wrapper");

  wrapper.click(function () {
    location.href = "./index.html";
  });
}

function changePost() {
  const leftPost = $(".news-post-items");
  const rightPost = $(".layout-right-post-list-items");

  leftPost.each((idx, val) => {
    $(val).click(function () {
      $(this).find("a")[0].click();
    });
  });

  rightPost.each((idx, val) => {
    $(val).click(function () {
      const imgData = $(this).children(".list-wrapper > img").attr("src");
      console.log(`🚀 | imgData:`, imgData);

      $(this).find("a")[0].click();
    });
  });
}
