// cookie
let currentCookie = document.cookie;
let cookieCheck = currentCookie.indexOf("yjm");
// console.log(cookieCheck)

if (cookieCheck > -1) {
  document.querySelector(".notice").style.display = "none";
} else {
  document.querySelector(".notice").style.display = "block";
}

document.querySelector(".hide").addEventListener("click", () => {
  let date = new Date();
  date.setMinutes(date.getMinutes() + 1);
  let setCookie = "CookieName=yjm; ";
  setCookie += "expires=" + date.toUTCString();

  document.cookie = setCookie;
});

document.querySelector(".Nclose").addEventListener("click", function (e) {
  e.preventDefault();
  this.parentElement.style.display = "none";
});

// svg

let pathH = document.querySelector(".path1");
let content1 = document.querySelector(".jurnal");
let content2 = document.querySelector(".service");
let content3 = document.querySelector(".skill-line");
let content4 = document.querySelector(".heart");

let path1 = document.querySelector(".path2");
let path2 = document.querySelector(".path3");
let path3 = document.querySelector(".path4");
let path4 = document.querySelector(".path5");

let pathHLength = pathH.getTotalLength();
//console.log(pathHLength);
let path1Length = path1.getTotalLength();
console.log(path1Length);
let path2Length = path2.getTotalLength();
let path3Length = path3.getTotalLength();
let path4Length = path4.getTotalLength();

path1.style.strokeDasharray = path1Length;
path1.style.strokeDashoffset = path1Length;

path2.style.strokeDasharray = path2Length;
path2.style.strokeDashoffset = path2Length;

path3.style.strokeDasharray = path3Length;
path3.style.strokeDashoffset = path3Length;

 path4.style.strokeDasharray = path4Length;
 path4.style.strokeDashoffset = path4Length;

window.addEventListener("scroll", function () {
  scrollHandler();
});
window.addEventListener("scroll", scrollHandler);

function scrollHandler() {
  let scrollY = pageYOffset + window.innerHeight * 0.8;
  path1.style.strokeDashoffset = calDashoffset(scrollY, content1, path1Length);
  path2.style.strokeDashoffset = calDashoffset(scrollY, content2, path2Length);
  path3.style.strokeDashoffset = calDashoffset(scrollY, content3, path3Length);
  path4.style.strokeDashoffset = calDashoffset(scrollY, content4, path4Length);
}

function calDashoffset(scrollY, element, length) {
  let ratio = (scrollY - element.offsetTop) / element.offsetHeight;
  let value = length - length * ratio;
  // console.log(value)
  return value < 0 ? 0 : value > length ? length : value;
}

/* ----------------------slide img------------------------- */

/* -------------------cube------------------------- */

let rotationX = 0;
let rotationY = 0;
let cube = document.querySelector(".box-area");
let six = document.querySelector(".box-bottom");
let three = document.querySelector(".box-back");
let four = document.querySelector(".box-left");

cube.style.transform = `rotateX(0deg) rotateY(0deg)`;
// four.style.transform = "rotateY(180deg)";
// six.style.transform = "rotateX(180deg)";

function front() {
  cube.style.transform = `rotateX(0deg) rotateY(0deg)`;
}

function rotateXAxis(n) {
  rotationX += 90 * n;
  cube.style.transform = `rotateX(${rotationX}deg) rotateY(0deg)`;
  //three.style.transform = "rotateX(180deg)";
}

function rotateYAxis(n) {
  rotationY += 90 * n;
  cube.style.transform = `rotateX(0deg) rotateY(${rotationY}deg)`;
  //three.style.transform = "rotateY(180deg)";
}
