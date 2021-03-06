'use strict';

// -- Nav -- //
var header = document.getElementById('navbar');
var menuLink = header.getElementsByClassName('menu__link');

// -- Tab 2 --//
var arrowBtn = document.querySelector('.arrow');
var arrowSmall = document.querySelector('.arrow-two');
var selectorEstancia = document.querySelector('.estancia-title');
var contentEstancia = document.querySelector('.estancia-content');
var servicios = document.querySelector('.servicios');
var selectorInfo = document.querySelector('.more-two');
var moreIncludes = document.querySelector('.tab2__option-includes');

//-- Nav -- //
for (var i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

// -- Tab 2 --//
function deployFirst() {
  if (contentEstancia.classList.contains('hide')) {
    contentEstancia.classList.remove('hide');
    servicios.classList.add('hide');
    arrowBtn.classList.add('rotate');
  } else {
    contentEstancia.classList.add('hide');
    arrowBtn.classList.remove('rotate');
  }
}

function deployInfo() {
  if (moreIncludes.classList.contains('hide')) {
    moreIncludes.classList.remove('hide');
    arrowSmall.classList.add('rotate');
  } else {
    moreIncludes.classList.add('hide');
    arrowSmall.classList.remove('rotate');
  }
}

selectorEstancia.addEventListener('click', deployFirst);
selectorInfo.addEventListener('click', deployInfo);
