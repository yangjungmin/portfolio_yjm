function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
loco();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ../img/01.png
  ../img/02.png
  ../img/03.png
  ../img/04.png
  ../img/05.png
  ../img/06.png
  ../img/07.png
  ../img/08.png
  ../img/09.png
  ../img/10.png
  ../img/11.png
  ../img/12.png
  ../img/13.png
  ../img/14.png
  ../img/15.png
  ../img/16.png
  ../img/17.png
  ../img/18.png
  ../img/19.png
  ../img/20.png
  ../img/21.png
  ../img/22.png
  ../img/23.png
  ../img/24.png
  ../img/25.png
  ../img/26.png
  ../img/27.png
  ../img/28.png
  ../img/29.png
  ../img/30.png
  ../img/31.png
  ../img/32.png
  ../img/33.png
  ../img/34.png
  ../img/35.png
  ../img/36.png
  ../img/37.png
  ../img/38.png
  ../img/39.png
  ../img/40.png
  ../img/41.png
  ../img/42.png
  ../img/43.png
  ../img/44.png
  ../img/45.png
  ../img/46.png
  ../img/47.png
  ../img/48.png
  ../img/49.png
  ../img/50.png
  ../img/51.png
  ../img/52.png
  ../img/53.png
  ../img/54.png
  ../img/55.png
  ../img/56.png
  ../img/57.png
  ../img/58.png
  ../img/59.png
  ../img/60.png
  ../img/61.png
  ../img/62.png
  ../img/63.png
  ../img/64.png
  ../img/65.png
  ../img/66.png
  ../img/67.png
  ../img/68.png
  ../img/69.png
  ../img/70.png
  ../img/71.png
  ../img/72.png
  ../img/73.png
  ../img/74.png
  ../img/75.png
  ../img/76.png
  ../img/77.png
  ../img/78.png
  ../img/79.png
  ../img/80.png
  ../img/81.png
  ../img/82.png
  ../img/83.png
  ../img/84.png
  ../img/85.png
  ../img/86.png
  ../img/87.png
  ../img/88.png
  ../img/89.png
  ../img/90.png
  ../img/91.png
  ../img/92.png
  ../img/93.png
  ../img/94.png
  ../img/95.png
  ../img/96.png
  ../img/97.png
  ../img/98.png
  ../img/99.png
  ../img/100.png
  ../img/101.png
  ../img/102.png
  ../img/103.png
  ../img/104.png
  ../img/105.png
  ../img/106.png
  ../img/107.png
  ../img/108.png
  ../img/109.png
  ../img/110.png
  ../img/111.png
  ../img/112.png
  ../img/113.png
  ../img/114.png
  ../img/115.png
  ../img/116.png
  ../img/117.png
  ../img/118.png
  ../img/119.png
  ../img/120.png
  ../img/121.png
  ../img/122.png
  ../img/123.png
  ../img/124.png
  ../img/125.png
  ../img/126.png
  ../img/127.png
  ../img/128.png
  ../img/129.png
  ../img/130.png
  ../img/131.png
  ../img/132.png
  ../img/133.png
  ../img/134.png
  ../img/135.png
  ../img/136.png
 `;
  return data.split("\n")[index];
}

const frameCount = 136;


const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `300% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `300% top`,
});