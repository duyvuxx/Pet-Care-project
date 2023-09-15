function start() {
  slideRate();
}

start();

// Number Increase Count
setTimeout(() => {
  function count($this) {
    var current = parseInt($this.html(), 10);
    $this.html((current += 2));
    if (current !== $this.data("count")) {
      setTimeout(function () {
        count($this);
      }, 40);
    }
  }

  $(".statistic-infor > p").each(function () {
    $(this).data("count", parseInt($(this).html(), 10));
    $(this).html("0");
    count($(this));
  });
}, 1000);

// Slide Rating
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

// Expand one by one
jQuery(".good-infor-list-items > a").click(function () {
  jQuery(".collapse").collapse("hide");
});

// Owl Carousel
$(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  margin: 50,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  dots: true
});
