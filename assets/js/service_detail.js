const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const dataValue = urlParams.get("data");

const detailImg = $(".detail-left-wrapper > img");

function changeDetailImg(num) {
  $(detailImg[0]).attr("src", `./assets/imgs/main/main_img_${num}.png`);
  $(detailImg[1]).attr("src", `./assets/imgs/main/main_sub_img_${num}.svg`);
}

changeDetailImg(dataValue);
