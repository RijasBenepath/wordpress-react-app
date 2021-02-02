var icon = document.getElementsByClassName('menu-icon');
var loader = document.getElementById('preloader');
var navbar = document.getElementsByClassName('navbar');
var header = document.getElementsByClassName('headerSection');
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    loader.style.display = 'none';
  });
function menuToggler() {
  console.log('menu click');
  icon[0].classList.toggle('open');
  navbar[0].classList.toggle('bg-white');
}
window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header[0].classList.add("fixed");
  } else {
    header[0].classList.remove('fixed');
  }
}