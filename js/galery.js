const buttons = document.querySelectorAll('.project');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay__inner img');
const gridOverlay = $('.grid__overlay');


//si écran supérieur à 500px, active le script pour la gallerie
if($(window).innerWidth() > 700) {
function open(e) {
  overlay.classList.add('open');
  const src= e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
}

function close() {
  overlay.classList.remove('open');
}

buttons.forEach(button => button.addEventListener('click', open));
overlay.addEventListener('click', close);
}
else {
  gridOverlay.css('display','none'); 
}



