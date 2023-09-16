function start() {
  homePage();
  heartLogin();
  pagination();
}

start();

function homePage() {
  const wrapper = $(".header-nav-wrapper");

  wrapper.click(function () {
    location.href = "./index.html";
  });
}

function heartLogin() {
  const heart = $(".wrapper > i");

  heart.each((idx, val) => {
    $(val).click(function () {
      alert("Please login first.");
    });
  });
}

function pagination() {
  const currentPage = 1;
  const totalPages = 2;

  const pageItemPrevious = $(".page-item:first");
  const pageItemNext = $(".page-item:last");

  if (currentPage === 1) {
    pageItemPrevious.css("display", "none");
  }

  if (currentPage === totalPages) {
    console.log("You are on the last page.");
    pageItemNext.css("display", "none");
  }
}
