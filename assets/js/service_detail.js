const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const dataValueTitle = urlParams.get("dataTitle");
const dataValueImg = urlParams.get("dataImg");

const detailImg = $(".detail-left-wrapper > img");
const detailTitle = $(".detail-left-title > h2");

function handleDetailService(val, num) {
  $(detailImg[0]).attr("src", `./assets/imgs/main/main_img_${num}.png`);
  $(detailImg[1]).attr("src", `./assets/imgs/main/main_sub_img_${num}.svg`);
  $(detailTitle).text(`${val}`);
}

handleDetailService(dataValueTitle, dataValueImg);
