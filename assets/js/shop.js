function start() {
  homePage();
  heartLogin();
  changePage();
  shopDetails();
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

function changePage() {
  const currentPage = location.pathname.slice(-6, -5);
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
        location.href = `./shop_${+currentPage - 1}.html`;
      }
    });
  }

  if (+currentPage === totalPages) {
    pageItemNext.css("display", "none");
  } else {
    pageItemNext.css("display", "block");
    pageItemNext.click(function () {
      if (+currentPage < totalPages) {
        location.href = `./shop_${+currentPage + 1}.html`;
      }
    });
  }
}

// Shop detail
function shopDetails() {
  const listItem = $(".layout-right-list-items");

  listItem.each((idx, val) => {
    $(val).click(function () {
      window.location.assign("./shop_detail.html");

      // get title
      const title = $(val).children(".text").children("h3").text();

      // get img name
      const imgAttr = $(val).children(".wrapper").children("img").attr("src");
      const imgArr = imgAttr.split("/");
      const imgData = imgArr[imgArr.length - 1].split(".")[0];

      // get price
      const price = $(val).children(".text").children("p").text();

      passShopData(title, imgData, price);
    });
  });

  function passShopData(title, img, price) {
    const dataTitle = title;
    const dataImg = img;
    const dataPrice = price;

    const url = `shop_detail.html?dataImg=${dataImg}&dataTitle=${dataTitle}&dataPrice=${dataPrice}`;
    window.location.href = url;
  }
}
