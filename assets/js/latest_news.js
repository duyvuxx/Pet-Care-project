function start() {
  newDetails();
  homePage();
}

start();

// Switch to Homepage
function homePage() {
  const wrapper = $(".header-nav-wrapper");

  wrapper.click(function () {
    location.href = "./index.html";
  });
}

// News Details
function newDetails() {
  const listItem = $(".news-list-items");

  listItem.each((idx, val) => {
    $(val).click(function () {
      window.location.assign("./news_detail.html");

      const title = $(val)
        .children(".news-title")
        .children(".news-text")
        .children("h3")
        .text();

      const img = $(val)
        .children(".news-wrapper")
        .children("img")
        .attr("src")
        .slice(-5, -4);

      passNewsData(title, img);
    });
  });

  function passNewsData(title, num) {
    const dataTitle = title;
    const dataImg = num;
    const url = `news_detail.html?dataImg=${dataImg}&dataTitle=${dataTitle}`;
    window.location.href = url;
  }
}
