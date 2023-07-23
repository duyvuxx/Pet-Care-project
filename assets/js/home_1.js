const bg = $(".gallery-active");
const bgImg = $(".gallery-bg-wrapper img");
const btnOff = $(".off");
const rightBtn = $(".right");
const leftBtn = $(".left");

let currentValue = 0;

function start() {
  showImgs();
  offImgs();
  nextImg();
  previousImg();
}

start();

function nextImg() {
  rightBtn.click(function () {
    if (currentValue === 5) {
      bgImg.attr(
        "src",
        `./assets/imgs/main/main_list_img${(currentValue = 1)}.png`
      );
    } else {
      bgImg.attr(
        "src",
        `./assets/imgs/main/main_list_img${(currentValue += 1)}.png`
      );
    }
  });
}

function previousImg() {
  leftBtn.click(function () {
    if (currentValue === 1) {
      bgImg.attr(
        "src",
        `./assets/imgs/main/main_list_img${(currentValue = 5)}.png`
      );
    } else {
      bgImg.attr(
        "src",
        `./assets/imgs/main/main_list_img${(currentValue -= 1)}.png`
      );
    }
  });
}

function showImgs() {
  const imgLists = $(".gallery-list-items");

  imgLists.each(function (idx, val) {
    $(val).click(function () {
      bg.css("display", "block");

      btnOff.css("display", "block");
      bgImg.css("display", "block");
      rightBtn.css("display", "block");
      leftBtn.css("display", "block");

      bgImg.attr("src", `./assets/imgs/main/main_list_img${idx + 1}.png`);

      currentValue = idx + 1;
    });
  });
}

function offImgs() {
  bg.click(offAll);
  btnOff.click(offAll);

  function offAll() {
    bg.css("display", "none");
    bgImg.css("display", "none");
    rightBtn.css("display", "none");
    leftBtn.css("display", "none");
    btnOff.css("display", "none");
  }
}