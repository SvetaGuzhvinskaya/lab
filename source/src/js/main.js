document.addEventListener('DOMContentLoaded', function() {
    let swiperService = new Swiper('.js-services-slider', {
		slidesPerView: 'auto',
		freeMode: true,
		spaceBetween: 8,
		speed: 600,
		breakpoints: {
			768: {
				spaceBetween: 16,
			}
		}
	});
});
