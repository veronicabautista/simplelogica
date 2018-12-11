'use strict';

var arrowBtn = document.querySelector('.arrow');
var arrowSmall = document.querySelector('.arrow-two');
var selectorEstancia = document.querySelector('.estancia-title');
var contentEstancia = document.querySelector('.estancia-content');
var servicios = document.querySelector('.servicios');
var selectorInfo = document.querySelector('.more-two');
var moreIncludes = document.querySelector('.tab2__option-includes');

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
