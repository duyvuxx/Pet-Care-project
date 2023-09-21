const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const dataValueTitle = urlParams.get("dataTitle");
const dataValueImg = urlParams.get("dataImg");
const dataValuePrice = urlParams.get("dataPrice");

const detailTitleBg = $(".shop-bg-title > div > span");
const detailTitle = $(".layout-right-title > h1");
const detailImg = $(".layout-left-wrapper > img");
const detailPrice = $(".layout-right-title > p");

function handleShopDetail(val, img, num) {
  $(detailTitleBg).text(`/ ${val}`);
  $(detailTitle).text(`${val}`);
  $(detailImg).attr("src", `./assets/imgs/shop/${img}.png`);
  $(detailPrice).text(`${num}`);
}

handleShopDetail(dataValueTitle, dataValueImg, dataValuePrice);

function start() {
  homePage();
  changeDesc();
  quantityCount();
}

start();

function homePage() {
  const wrapper = $(".header-nav-wrapper");

  wrapper.click(function () {
    location.href = "./index.html";
  });
}

function changeDesc() {
  const tabs = $(".description-title p");
  const description = $(".description .desc");
  const review = $(".description .re-layout");

  tabs.each((idx, val) => {
    $(val).click(function () {
      tabs.removeClass("active");

      $(this).addClass("active");
      console.log(idx);

      if (idx === 1) {
        description.removeClass("enable");
        review.addClass("enable");
      } else {
        description.addClass("enable");
        review.removeClass("enable");
      }
    });
  });
}

function quantityCount() {
  let number = parseInt($(".layout-right-quantity-infor > p").text());

  const plus = $(".quantity-icon > i:first-child");
  const minus = $(".quantity-icon > i:last-child");

  plus.click(function () {
    number++;
    updateQuantity(number);
  });

  minus.click(function () {
    if (number > 0) {
      number--;
      updateQuantity(number);
    }
  });

  function updateQuantity(newNumber) {
    $(".layout-right-quantity-infor > p").text(newNumber);
  }
}
