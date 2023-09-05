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
  slideRate();
  playVid();
  slideDay();
  rotateIcons();
  serviceDetails();
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
      $("html, body").css({
        overflow: "hidden",
        height: "50%,",
      });

      bg.css("display", "block");

      btnOff.css("display", "block");
      bgImg.css("display", "block");
      rightBtn.css("display", "block");
      leftBtn.css("display", "block");

      $(".gallery-bg-wrapper").css("width", "32%");
      bgImg.attr("src", `./assets/imgs/main/main_list_img${idx + 1}.png`);

      currentValue = idx + 1;
    });
  });
}

function offImgs() {
  bg.click(offAll);
  btnOff.click(offAll);

  function offAll() {
    $("html, body").css({
      overflow: "auto",
    });

    bg.css("display", "none");
    bgImg.css("display", "none");
    rightBtn.css("display", "none");
    leftBtn.css("display", "none");
    btnOff.css("display", "none");
  }
}

const rate = $(".slide-rate");

function changeSlideRate(num) {
  rate.each(function (idx, val) {
    if (num === idx) {
      $(val).addClass("active");
    } else {
      $(val).removeClass("active");
    }
  });
}

function slideRate() {
  const btn = $(".slide-circle i");

  btn.each(function (idx, val) {
    $(val).click(function () {
      btn.removeClass("active-slide-btn");
      $(this).addClass("active-slide-btn");

      changeSlideRate(idx);
    });
  });
}

function playVid() {
  const video = $(".talking-outer > video")[0];
  const btnVid = $(".talking-outer > button");

  btnVid.click(function () {
    video.play();
    $(this).fadeOut("slow");
  });
}

function slideDay() {
  const slider = $(".slider-range");
  const output = $(".slider-day");
  output.text(3);

  slider.on("input", function () {
    output.text($(this).val());
  });
}

function rotateIcons() {
  const wrapperIcons = $(".about-infor-expert-items");
  const icons = $(".about-infor-expert-items > i");

  wrapperIcons.each((idx, val) => {
    $(val).on("mouseenter", () => {
      $(icons[idx]).addClass("fa-circle-left").removeClass("fa-circle-right");
    });
  });

  wrapperIcons.each((idx, val) => {
    $(val).on("mouseleave", () => {
      $(icons[idx]).addClass("fa-circle-right").removeClass("fa-circle-left");
    });
  });
}

// Number Increase Count
setTimeout(() => {
  function count($this) {
    var current = parseInt($this.html(), 10);
    $this.html((current += 2));
    if (current !== $this.data("count")) {
      setTimeout(function () {
        count($this);
      }, 60);
    }
  }

  $(".statistic-infor > p").each(function () {
    $(this).data("count", parseInt($(this).html(), 10));
    $(this).html("0");
    count($(this));
  });
}, 4000);

// Service Details
function serviceDetails() {
  const btn = $(".quality-list-items > button");
  // const detailImg = $(".detail-left-wrapper > img");

  btn.each((idx, val) => {
    $(val).click(function () {
      window.location.assign("./service_detail.html");

      passData(idx + 1);
    });
  });

  function passData(num) {
    const dataToPass = num;
    const url = `service_detail.html?data=${dataToPass}`;
    window.location.href = url;
  }
  // console.log($(detailImg[0]).attr("src"));

  // $(detailImg).attr("src", `./assets/imgs/main/main_img_${num}.png`);
}
