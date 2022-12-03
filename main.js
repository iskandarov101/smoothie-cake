const elModalToggler = document.querySelector('.menu-burger');
const elModal = document.querySelector('.header');
const elModalClose = document.querySelector('.header--open');
const elHero = document.querySelector('.hero')


const bgImgArray = ['hero-bg', 'hero-bg2', 'hero-bg3'];

let bgImgNumber = 0;


let interval = setInterval(change, 2000)


function change() {
  bgImgNumber++

  if (bgImgNumber == 3) {
    bgImgNumber = 0
  }

  elHero.style.backgroundImage = `url("../img/${bgImgArray[bgImgNumber]}.png")`
}



elModalToggler.addEventListener('click', function () {
  elModal.classList.toggle('header--open');
});