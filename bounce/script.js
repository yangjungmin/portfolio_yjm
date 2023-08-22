
// JavaScript
let imgs = ["../img/la7.jpg", "../img/111111.jpg", "../img/la3.jpg"];
  
  const boxes = document.querySelectorAll('.box b');
  
  let currentIndex = 0;
  
  function changeZIndex() {
    boxes.forEach((box, index) => {
      // 현재 인덱스에 해당하는 이미지로 배경을 설정합니다.
      const imgIndex = (index + currentIndex) % imgs.length;
      box.style.backgroundImage = `url(${imgs[imgIndex]})`;
    });
  
    currentIndex = (currentIndex + 1) % boxes.length; // 다음 인덱스로 이동하고, 배열 길이를 초과하는 경우 0으로 다시 초기화합니다.
  }
  
  setInterval(changeZIndex, 2000);
  