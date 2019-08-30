"use strict";

function counter() {
  var jackpotCount = document.getElementById('jackpot-count');

  function getCountNum() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    var startDateMilliseconds = new Date('2019-07-29').getTime();
    var now = new Date().getTime();
    var count = Math.round((now - startDateMilliseconds) / 1000);
    jackpotCount.textContent = String(count).replace(/\s/g, '').replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    setInterval(function () {
      if (count > 100000000) {
        startDateMilliseconds = new Date().getTime();
        count = 0;
      } else {
        count += getRandomInt(100, 1000);
        jackpotCount.textContent = String(count).replace(/\s/g, '').replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
      }
    }, getRandomInt(3000, 7000));
  }

  getCountNum();
}

counter();
"use strict";

function mouseImgParralax() {
  var imagesContainer = document.getElementById('image-layout');
  var parallaxImg = document.getElementById('parallax-img');

  imagesContainer.onmousemove = function (event) {
    console.log(event.offsetX);
    console.log(event.offsetY);
    parallaxImg.style.backgroundPositionX = event.offsetX / 10 + 'px';
    parallaxImg.style.backgroundPositionY = event.offsetY / 10 + 'px';
  };
}

mouseImgParralax();
"use strict";

function togglePageLangList() {
  var pageLangBlockElem = document.getElementById('page-lang');
  var pageLangToggleButton = document.getElementById('page-lang-toggle-button');
  var pageLangListElem = document.getElementById('page-lang-list');
  pageLangBlockElem.addEventListener('click', function () {
    pageLangListElem.classList.toggle('page-lang__list--active');
    pageLangToggleButton.classList.toggle('page-lang__toggle-button--active');
  });
}

togglePageLangList();