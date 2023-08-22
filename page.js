

    let slideIndex = 1;
    showSlider(slideIndex);

    function showSlider(n) {
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("demo");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }
      dots[slideIndex - 1].classList.add("active");
    }

    function plusSlides(n) {
      showSlider((slideIndex += n));
    }

    function currentSlide(n) {
      showSlider((slideIndex = n));
    }

    /* -------------------service page img------------------------- */
    let buttons = document.querySelectorAll(".buttonWrap button");
    let contentWrap = document.querySelectorAll(".page .contentWrap");
    let imgArr = document.querySelectorAll(".page .contentWrap img");
    /* let title = document.querySelector("h2"); */
    let pageNum = 0;
    let totalNum = 0;

    totalNum = contentWrap.length;
    //console.log(totalNum)//3

    buttons[0].addEventListener("click", function () {
      prevFunc();
    });

    buttons[1].addEventListener("click", function () {
      nextFunc();
    });

    function prevFunc() {
      if (pageNum > 0) {
        pageNum--;
      } else {
        pageNum = totalNum - 1;
      }

      pageSetFeuc();
    }

    function nextFunc() {
      if (pageNum < totalNum - 1) {
        pageNum++;
      } else {
        pageNum = 0;
      }
      pageSetFeuc();
    }

    function pageSetFeuc() {
      imgArr.forEach((img) => {
        img.classList.remove("active");
      });

      contentWrap[pageNum].querySelectorAll("img").forEach((img) => {
        img.classList.add("active");
      });

      /* title.innerHTML = `PAGE:${pageNum + 1}`; */
    }

    pageSetFeuc();


