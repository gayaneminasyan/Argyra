
/* Nav icon */
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll');
}


/* Phone Mask */
mask('[data-tel-input]');

const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input)=>{
	input.addEventListener('input', ()=>{
		if (input.value == '+') input.value = '';
	})
	input.addEventListener('blur', ()=>{
		if (input.value == '+') input.value = '';
	})
});

/* Yandex Map */

ymaps.ready(init);
function init(){
	var map = new ymaps.Map('map', {
		center: [40.190878, 44.521249],
		zoom: 13,
	});

	var myPlacemark = new ymaps.Placemark(
		[40.190878, 44.521249],
		{
			balloonContent: `
				<div class="balloon">
					<div class="balloon__address">Argyra</div>
					<div class="balloon__contacts">
						<a href="tel:+37493208918">+374 (93) 208918</a>
					</div>
				</div>
			`,
		},
		{
			iconLayout: 'default#image',
			iconImageHref: './img/header/map.svg',
			iconImageSize: [40, 40],
			iconImageOffset: [-20, -40],
		}
	);

	map.controls.remove('geolocationControl'); 
	map.controls.remove('searchControl'); 
	map.controls.remove('trafficControl'); 
	map.controls.remove('typeSelector'); 

	map.controls.remove('rulerControl'); 
	map.behaviors.disable(['scrollZoom']); 

	map.geoObjects.add(myPlacemark);
    myPlacemark.balloon.open();

}

