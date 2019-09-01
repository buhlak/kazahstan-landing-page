"use strict";

function counter() {
  var jackpotCount = document.getElementById('jackpot-count');
  var startDateMilliseconds = new Date('2019-07-29').getTime();
  var now = new Date().getTime();
  var count = Number(getLocalStorage()) || Math.round((now - startDateMilliseconds) / 1000);

  function setLocalStorage(count) {
    localStorage.setItem('jackpotCounter', count);
  }

  function getLocalStorage() {
    return localStorage.getItem('jackpotCounter');
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function formatString() {
    jackpotCount.textContent = String(count).replace(/\s/g, '').replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
  }

  formatString();
  setInterval(function () {
    if (count >= 100000000) {
      startDateMilliseconds = new Date().getTime();
      count = 0;
      setLocalStorage(count);
    } else {
      count += getRandomInt(100, 1000);
      formatString();
      setLocalStorage(count);
    }
  }, getRandomInt(3000, 7000));
}

counter();
"use strict";

function mouseImgParralax() {
  var imagesContainer = document.getElementById('image-layout');
  var parallaxImgCards = document.getElementById('parallax-img-cards');
  var parallaxImgGirl = document.getElementById('parallax-img-girl');

  imagesContainer.onmousemove = function (event) {
    parallaxImgCards.style.backgroundPositionX = event.offsetX / 12 + 'px';
    parallaxImgCards.style.backgroundPositionY = event.offsetY / 12 + 'px';
    parallaxImgGirl.style.backgroundPositionX = event.offsetX / 40 + 'px';
    parallaxImgGirl.style.backgroundPositionY = event.offsetY / 40 + 'px';
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