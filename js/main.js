const swiper1 = new Swiper('.wellcome__swiper', {
  // Optional parameters
  loop: true,
	speed: 550,
	spaceBetween: 0,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
let swiper2 = new Swiper('.hotel-cards__swiper', {
  // Optional parameters
  loop: true,
	speed: 550,
	autoHeight: true,
  // Navigation arrows
  navigation: {
    nextEl: '.room-swiper-button__next',
    prevEl: '.room-swiper-button__prev',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
		},
		621: {
			slidesPerView: 2,
			spaceBetween: 50
		},
		810: {
			slidesPerView: 2,
			spaceBetween: 150
		},
		970: {
			slidesPerView: 3,
			spaceBetween: 40
		},
		1140: {
			slidesPerView: 3,
			spaceBetween: 110
		},

	}
});
let swiper3 = new Swiper('.reviews__swiper', {
  // Optional parameters
  loop: true,
	speed: 550,
	autoHeight: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev',
	},
});
window.addEventListener('scroll', function() {
	if (pageYOffset > 10)
		document.getElementById('showScroll').classList.add('scroll');
	else
		document.getElementById('showScroll').classList.remove('scroll');
});

window.addEventListener('DOMContentLoaded', function() {
	if (pageYOffset > 10)
		document.getElementById('showScroll').classList.add('scroll');
	else
		document.getElementById('showScroll').classList.remove('scroll');
});

let burger = document.querySelector('.burger');
let mobileMenu = document.querySelector('.header');
const menuLinks = document.querySelectorAll('.navbar__button[data-goto]');
const footerLinks = document.querySelectorAll('.footer__button');
console.log(footerLinks);
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick)
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const goToBlock = document.querySelector(menuLink.dataset.goto);
			let goToBlockValue;
			if (window.innerWidth < 767) {
				goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.burger-wrapper').offsetHeight;
			}
			else {
				goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
			}

			if (burger.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				burger.classList.remove('_active');
				mobileMenu.classList.remove('_active');
			}


			window.scrollTo({
				top: goToBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
	}
}
}
if (footerLinks.length > 0) {
footerLinks.forEach(footerLink => {
		footerLink.addEventListener('click', onMenuLinkClickF)
	});
	function onMenuLinkClickF(e) {
		const footerLink = e.target;
		if (footerLink.dataset.goto && document.querySelector(footerLink.dataset.goto)) {
			const goToBlock = document.querySelector(footerLink.dataset.goto);
			let goToBlockValue;
			if (window.innerWidth < 767) {
				goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.burger-wrapper').offsetHeight;
			}
			else {
				goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
			}

			window.scrollTo({
				top: goToBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
	}
}
}



const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	}
}
if (isMobile.any()) {
	document.body.classList.add('_mobile')
}
else {
	document.body.classList.add('_pc')
}

if (burger) {
	burger.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		mobileMenu.classList.toggle('_active');
		burger.classList.toggle('_active');

	});
}
