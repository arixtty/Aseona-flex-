$(document).ready(function() {
  $(".case-study__showcase").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    cssEase: "ease-in",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(document).ready(function() {
  $(".reviews__stories").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    cssEase: "ease-in"
  });
});

var mobileBtn = document.querySelector(".mobile-nav__icon");
var menu = document.querySelector(".navigation__list");
var navForm = document.querySelector(".navigation__form");
var headerContacts = document.querySelector(".header__contacts");
var overlay = document.querySelector(".overlay");

mobileBtn.addEventListener("click", function() {
  if (menu.className !== "navigation__list open-flex") {
    menu.className += " open-flex";
    navForm.className += " open-flex";
    headerContacts.className += " open-block";
    overlay.className += ' open';
  } else {
    menu.className = "navigation__list";
    navForm.className = "navigation__form";
    headerContacts.className = "header__contacts";
    overlay.className = 'overlay';
  }
});

window.addEventListener('click', function(event) {
	if(event.target === overlay) {
    menu.className = "navigation__list";
    navForm.className = "navigation__form";
    headerContacts.className = "header__contacts";
	    overlay.className = 'overlay';
	}
});
