// var typed = new Typed('#typed', {
//   strings: ["Front End Developer "],
//   typeSpeed: 50,
//   backSpeed: 20,
//   loop: true
// });

(function() {

  var body = document.body;

  // Look for .hamburger
  var hamburger = document.querySelector('.hamburger');
  var navbarItems = document.querySelector('.navbar-items');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    navbarItems.classList.toggle('toggle-show');
  });

})();
