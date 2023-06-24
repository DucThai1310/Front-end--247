const $ = function (id) {
  return document.getElementById(id);
};
const createRollOver = function (imgEl, newSrc, newAlt) {
  var time;
  const first_src = imgEl.src;
  const first_alt = imgEl.alt;
  const newImage = new Image();
  newImage.src = newSrc;
  imgEl.addEventListener('mouseover', function () {
    time = setTimeout(() => {
      imgEl.src = newSrc;
      imgEl.alt = newAlt;
    }, 2000);
  });
  imgEl.addEventListener('mouseout', function () {
    clearTimeout(time);
    imgEl.src = first_src;
    imgEl.alt = first_alt;
  });
};
const sliderShow = function (listImg, imgElement, time) {
  this.index = 0;
  this.time = time;
  this.elementImg = imgElement;
  const _this = this;

  this.listImage = listImg.map(img => {
    const newImage = new Image();
    newImage.src = img.img;
    newImage.alt = img.alt;
    return newImage;
  });
  this.rolloverImage = function () {
    this.elementImg.src = this.listImage[this.index].src;
    this.elementImg.alt = this.listImage[this.index].alt;
    this.index++;
    if (this.index == this.listImage.length) {
      this.index = 0;
    }
  };

  this.start = function () {
    setInterval(function () {
      _this.rolloverImage();
    }, _this.time);
  };
  return {
    start: this.start,
  };
};
window.onload = function () {
  const listImg = [
    {
      img: './images/dusk.jpg',
      alt: '',
    },
    {
      img: './images/gear.jpg',
      alt: '',
    },
    {
      img: './images/hero.jpg',
      alt: '',
    },
    {
      img: './images/lunch.jpg',
      alt: '',
    },
    {
      img: './images/plane.jpg',
      alt: '',
    },
    {
      img: './images/release.jpg',
      alt: '',
    },
  ];
  createRollOver($('img'), './images/hero.jpg', 'this is hero');
  const slider = new sliderShow(listImg, $('img1'), 1000);
  slider.start();
  const slider2 = new sliderShow(listImg, $('img2'), 2000);
  slider2.start();
};
