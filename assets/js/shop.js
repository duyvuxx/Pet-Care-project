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
  const currentPage = window.location.pathname.slice(6, -5);
  const totalPages = 2;

  const pageItemPrevious = $(".page-item:first");
  const pageItem = $(".page-item");
  const pageItemNext = $(".page-item:last");

  $(pageItem[+currentPage]).addClass("disabled");

  if (+currentPage === 1) {
    pageItemPrevious.css("display", "none");
  } else {
    pageItemPrevious.css("display", "block");
    pageItemPrevious.click(function () {
      if (+currentPage > 1) {
        window.location.href = `./shop_${+currentPage - 1}.html`;
      }
    });
  }

  if (+currentPage === totalPages) {
    pageItemNext.css("display", "none");
  } else {
    pageItemNext.css("display", "block");
    pageItemNext.click(function () {
      if (+currentPage < totalPages) {
        window.location.href = `./shop_${+currentPage + 1}.html`;
      }
    });
  }
}
