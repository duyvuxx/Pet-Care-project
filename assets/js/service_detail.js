const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const dataValueTitle = urlParams.get("dataTitle");
const dataValueImg = urlParams.get("dataImg");

const detailImg = $(".detail-left-wrapper > img");
const detailTitle = $(".detail-left-title > .first-infor > h2");

function handleDetailService(val, num) {
  $(detailImg[0]).attr("src", `./assets/imgs/main/main_service_${num}.jpg`);
  $(detailImg[1]).attr("src", `./assets/imgs/main/main_sub_img_${num}.svg`);
  $(detailTitle).text(`${val}`);
}

handleDetailService(dataValueTitle, dataValueImg);

// Switch to Homepage
function homePage() {
  const wrapper = $(".header-nav-wrapper");

  wrapper.click(function () {
    location.href = "./index.html";
  });
}

homePage()
