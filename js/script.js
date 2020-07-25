
// Слайдер doctors ==============================================
$('.doctors__list').slick({
	centerPadding: '30px',
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	prevArrow: '.doctors__preview',
	nextArrow: '.doctors__next',
	responsive: [
	{
    	breakpoint: 425,
    	settings: {
    		slidesToShow: 1,
    		slidesToScroll: 1,
    		infinite: false,
    		dots: false
    	}
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: false
      }
    },
    {
    	breakpoint: 1080,
    	settings: {
    		slidesToShow: 3,
    		slidesToScroll: 3,
    		infinite: false,
    		dots: false
    	}
    }
    ]
});

// hover на .doctors__item ==============================================

let hover_target = document.querySelectorAll('.doctors__item');

let height_slider = document.querySelector('.doctors__list>.slick-list');
let heightToThis = document.querySelector('.doctors__list');
let arrHeightSlide = [];
hover_target.forEach(item => {
	arrHeightSlide.push(item.offsetHeight)
})
let maxHeightSlide = Math.max(...arrHeightSlide);
heightToThis.style.height = maxHeightSlide+"px";

hover_target.forEach(item => {
	item.addEventListener('mouseover', () => {
		item.children[1].style.paddingTop = (item.offsetHeight)+'px';
		height_slider.style.height = (item.children[1].offsetHeight + item.offsetHeight)+"px";
		item.addEventListener('mouseout', () => {
			item.children[1].style.paddingTop = '';
			height_slider.style.height = "";
		})
	})
})

$('.services__list').slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	prevArrow: '.services__preview',
	nextArrow: '.services__next',
	responsive: [
	{
    	breakpoint: 425,
    	settings: {
    		slidesToShow: 1,
    		slidesToScroll: 1,
    		infinite: false,
    		dots: false
    	}
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: false
      }
    },
    {
    	breakpoint: 1080,
    	settings: {
    		slidesToShow: 3,
    		slidesToScroll: 3,
    		infinite: false,
    		dots: false
    	}
    }
    ]
});





// Вікно з телефонами ==============================================
let open_phones = document.querySelector('.main-info__phone>.material-icons');
let modal_phones = document.querySelector('.modal-phones');
let close_phones = document.querySelector('.modal-phones__header>.material-icons');
open_phones.addEventListener('click', (e) =>{
	modal_phones.classList.remove('hidden');
})
close_phones.addEventListener('click', (e) =>{
	modal_phones.classList.add('hidden');
})
document.addEventListener('click', (event) => {
	if (!event.target.closest('.modal-phones') && !event.target.closest('.open-modal-phones')) {
		modal_phones.classList.add('hidden');
	}
});


// Модальне вікно з картою ==============================================
let open_map = document.querySelector('.main-info__gmap');
let modal_map = document.querySelector('.modal-map');
let close_map = document.querySelector('.modal-map__close');
open_map.addEventListener('click', (e) =>{
	e.preventDefault();	
	modal_map.classList.remove('hidden');
	document.body.style.overflow = 'hidden';	
})
close_map.addEventListener('click', (e) =>{
	modal_map.classList.add('hidden');
	document.body.style.overflow = '';
})
modal_map.addEventListener('click', (event) => {
		if(!event.target.closest('.modal-map__window')){
			modal_map.classList.add('hidden');
			document.body.style.overflow = '';
		}
});

// Меню клініки ==============================================
let open_menu = document.querySelector('.menu-btn');
let menu_user = document.querySelector('.header-user');
let menu_btn = document.querySelector('.menu-btn__icon');
open_menu.addEventListener('click', () => {
	menu_user.classList.toggle('hiden');
	menu_btn.classList.toggle('active');
})
window.addEventListener('scroll', (e) => {
	if(window.pageYOffset > 100) {
		menu_user.classList.add('hiden');
		menu_btn.classList.remove('active');
	}
});
document.addEventListener('click', (event) => {
	if (!event.target.closest('.header-user') && !event.target.closest('.menu-btn')) {
		menu_user.classList.add('hiden');
		menu_btn.classList.remove('active');
	}
});

// Модальне вікно галереї ==============================================
$('.slider__imgs').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  arrows: false,
  fade: true,
  asNavFor: '.slider__previews'
});
$('.slider__previews').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider__imgs',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});