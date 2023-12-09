const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('.navigation');
const toTop = document.querySelector('.to-top');

hamburgerMenu.addEventListener('click', () => {
	navigation.classList.toggle('active');
});
window.addEventListener('scroll', () => {
	if (window.pageYOffset > 100) {
		toTop.classList.add('active');
	} else {
		toTop.classList.remove('active');
	}
});

const getSlidesPerView = () => {
	width = window.innerWidth;
	if (width < 420) {
		return 1;
	} else if (width < 760) {
		return 2;
	} else return 3;
};

const swiper = new Swiper('.mySwiper', {
	slidesPerView: getSlidesPerView(),
	spaceBetween: 10,
});

var swiper2 = new Swiper('.mySwiperservices', {
	slidesPerView: 1,
	spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		700: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
	},
});
