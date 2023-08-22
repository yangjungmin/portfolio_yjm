
//mainmenu
$(".gnb li a").mouseenter(function () {
  let bar = $(this).position().left;
  //console.log(bar);
  let widNum = $(this).width();
  //$('.bar').animate
  $(".bar").animate(
    {
      left: bar + "px",
      width: widNum + "px",
      opacity: 1,
    },
    300
  );
});

$(".gnb").mouseleave(function () {
  $(".bar").animate(
    {
      left: 0,
      width: 0,
      opacity: 0,
    },
    10
  );
});

$(".animate").scrolla({
  // default
  mobile: true,
  once: false,
  animateCssVersion: 4, // scrolla animate.css
});

// menuOpen
//$('.menuOpen .open').on('click',function(){})
$(".menuOpen .open").click(function (e) {
  e.preventDefault();
  $(".menuOpen .menuWrap").addClass("on");
});
$(".menuWrap .close").click(function (e) {
  e.preventDefault();
  $(".menuOpen .menuWrap").removeClass("on");
});

$(".menuWrap ul li").click(function (e) {
  e.preventDefault();
  $(".menuOpen .menuWrap").removeClass("on");
});

//background color
$(window).scroll(function () {
  let scrollTop = $(this).scrollTop();
  //console.log(scrollTop);
  let offset = $(".service").offset().top - 400;
  if (scrollTop > offset) {
    $("body").addClass("on");
  } else {
    $("body").removeClass("on");
  }
});

/* -----------skill------------ */
let offset = $(".main").offset().top - 300;
let executed = false;

$(window).scroll(function () {
  let wScroll = $(this).scrollTop();
  //console.log(wScroll);
  if (wScroll > offset) {
    if (!executed) {
      $(".skill-per").each(function () {
        let $this = $(this);
        let per = $this.attr("per");
        //A.attr(B)
        //A.attr(B,C)
        $this.css({ width: per + "%" });
        $({ aniValue: 0 }).animate(
          { aniValue: per },
          {
            duration: 1000,
            step: function () {
              $this.attr("per", Math.ceil(this.aniValue) + "%");
            },
          }
        );
      });
      executed = true;
    }
  }
});

/* ------------------------슬릭---------------------------- */

let hCont = $(".history_slide");
let hBtn = $(".history_btn li");
let hIndex;

hCont.slick({});

//버튼을 클릭하면 해당 index를 찾아서 이동
hBtn.click(function (e) {
  e.preventDefault();
  let target = $(this); //클릭한 그것
  let index = target.index(); //클릭한 그것의 index번호
  // console.log(index);

  if (index == 0) {
    hIndex = 0;
  } else if (index == 1) {
    hIndex = 4;
  } else if (index == 2) {
    hIndex = 8;
  } else if (index == 3) {
    hIndex = 12;
  } else if (index == 4) {
    hIndex = 16;
  }
  //console.log(hIndex);
  hCont.slick("slickGoTo", hIndex);

  hBtn.removeClass("active");
  target.addClass("active");
});

hCont.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
  //console.log(nextSlide);
  if (nextSlide >= 0 && nextSlide <= 3) {
    hBtn.removeClass("active");
    hBtn.eq(0).addClass("active");
  } else if (nextSlide >= 4 && nextSlide <= 7) {
    hBtn.removeClass("active");
    hBtn.eq(1).addClass("active");
  } else if (nextSlide >= 8 && nextSlide <= 11) {
    hBtn.removeClass("active");
    hBtn.eq(2).addClass("active");
  } else if (nextSlide >= 12 && nextSlide <= 15) {
    hBtn.removeClass("active");
    hBtn.eq(3).addClass("active");
  } else if (nextSlide >= 16 && nextSlide <= 19) {
    hBtn.removeClass("active");
    hBtn.eq(4).addClass("active");
  }

  $(".history_page em").text(nextSlide + 1);
});

// /history_poster
let posterBtn = $(".poster_btn ul li");
let postCont = $(".poster_cont .poster");

//posterBtn를 모두 안보이게숨겨라.동일한 요소 중 0번은.보이게해라
postCont.hide().eq(0).show();

posterBtn.click(function (e) {
  e.preventDefault();
  let target = $(this);
  let index = target.index();
  //console.log(index)
  postCont.hide().eq(index).fadeIn();
  postCont.find("figure").removeClass("move");
  postCont.eq(index).find("figure").addClass("move");

  //밑줄 스타일
  posterBtn.removeClass("active");
  target.addClass("active");
});

$(".cider_bottle").slick({
  dots: true,
  centerMode: true,
  centerPadding: "350px",
});

//memory-slide
let mCont = $(".memory-slider");
let mBtn = $(".memory_btn li");
let mbg = $(".history-slider-bg");
let mIndex;
mCont.slick({
  fade: true,
  autoplay: true,
});
mBtn.click(function (e) {
  e.preventDefault();
  let target = $(this);
  let index = target.index();
  // console.log(index)
  if (index == 0) {
    mIndex = 0;
  } else if (index == 1) {
    mIndex = 4;
  } else if (index == 2) {
    mIndex = 8;
  } else if (index == 3) {
    mIndex = 12;
  } else if (index == 4) {
    mIndex = 16;
  }
  //console.log(mIndex);
  mCont.slick("slickGoTo", mIndex);
});

/* Event에 마지막꺼  https://github.com/kenwheeler/slick/*/
mCont.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
  //console.log(nextSlide);
  if (nextSlide >= 0 && nextSlide <= 3) {
    mbg.removeClass(
      "bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05').addClass('bg-item-01"
    );
  } else if (nextSlide >= 4 && nextSlide <= 7) {
    mbg
      .removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05")
      .addClass("bg-item-02");
  } else if (nextSlide >= 8 && nextSlide <= 11) {
    mbg
      .removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05")
      .addClass("bg-item-03");
  } else if (nextSlide >= 12 && nextSlide <= 15) {
    mbg
      .removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05")
      .addClass("bg-item-04");
  } else if (nextSlide >= 16 && nextSlide <= 19) {
    mbg
      .removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05")
      .addClass("bg-item-05");
  }

  $(".memory_page_btn em").text(nextSlide + 1);
  mCont.slick("slickPlay");
});

/* -------------------lightgallery------------------------- */
lightGallery(document.getElementById("lightgallery"), {
  plugins: [lgThumbnail],
});
