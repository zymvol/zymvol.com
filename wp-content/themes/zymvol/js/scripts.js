// vanilla js
'use strict';

const THEME_PATH = wp_helper.home_path + '/';
const responsive = {
	mobile: 402,
	tablet: 768,
	desktop: 992,
	desktopLg: 1200
}

document.addEventListener('DOMContentLoaded', () => {
	loadFonts();
	lazyLoad();
	mobileMenu();
	animateMobileMenu();
	initStoriesGallery();
	initReadMore();
	initKnowledgeGallery();
	initInfoSection();
	initParallax();

	// dev2
	setPropertyHeaderHeight();
	initPageLoadedClass();
	initMainMenu();
	initCustomDropdown();
	initProjectsSection();
	initPublicationsCardsCarousel();
	initPageNav();
	initPersonCardsSection();
	initPeopleCardsCarousel();
	initVacanciesCardsCarousel();
	initUniversityCardsCarousel();
	initCustomScroll();
	initLogosCarousel();
	initExtraCardsSection();
	initStoriesCardsCarousel();
	initInformCardsSection();
	initImageCardsCarousel();
	initAnimationTextInUp();
	initAnimations();
	initAppear();
	initBodyBg();

	// dev3
	initPlyr();
	// dev4
});

window.addEventListener('resize', () => {
	animateMobileMenu();

	// dev2
	// dev3
	// dev4
});

window.addEventListener('scroll', function() {
	document.documentElement.scrollTop > 0 ? document.documentElement.classList.add('scrolled') : document.documentElement.classList.remove('scrolled');

	// dev 2

	// dev 3

	// dev 4

	// dev 5
});

// load fonts
function loadFonts() {
	WebFont.load({
		custom: {
			families: ['NaN Hyena Sunset:n5', 'Font Awesome 6 Free', 'Font Awesome 6 Brands'],
			urls: [THEME_PATH + 'css/fonts.css'],
		},
		google: {
			families: ['Lato:400,500,700']
		}
	});
}

// lazyLoad Images
function lazyLoad() {
	const images = document.querySelectorAll('img.lazyload');

	if (images.length) {
		images.forEach(function (img) {
			img.addEventListener('load', event => {
				event.target.classList.add('lazyloaded');

				if (event.target.classList.contains('svg-html')) {
					replaseInlineSvg(event.target);
				}
			});
		});

		window.addEventListener('load', (e) => {
			images.forEach(img => {
				if (img.complete && img.naturalHeight !== 0) {
					img.classList.add('lazyloaded');

					if (img.classList.contains('svg-html')) {
						replaseInlineSvg(img);
					}
				}
			});
		});
	}
}

// replaseInlineSvg
function replaseInlineSvg(el) {
	const imgID = el.getAttribute('id');
	const imgClass = el.getAttribute('class');
	const imgURL = el.getAttribute('src');

	fetch(imgURL)
		.then(data => data.text())
		.then(response => {
			const parser = new DOMParser();
			const xmlDoc = parser.parseFromString(response, 'text/html');
			let svg = xmlDoc.querySelector('svg');

			if (typeof imgID !== 'undefined') {
				svg.setAttribute('id', imgID);
			}

			if (typeof imgClass !== 'undefined') {
				svg.setAttribute('class', imgClass + ' replaced-svg');
			}

			svg.removeAttribute('xmlns:a');

			if (el.parentNode) {
				el.parentNode.replaceChild(svg, el);
			}
	});
}

// mobile menu
function mobileMenu() {
	const openBtn = document.querySelector('.open-menu');

	if (openBtn) {
		openBtn.addEventListener('click', function(event) {
			event.preventDefault();
			if ( document.body.classList.contains('menu-opened') ) {
				document.body.classList.remove('menu-opened');
			} else {
				document.body.classList.add('menu-opened');
			}
		});
	}
};

// animate mobile menu
function animateMobileMenu() {
	if (window.innerWidth < responsive.desktop && !document.body.classList.contains('animate-menu')) {
		setTimeout(() => {
			document.body.classList.add('animate-menu');
		}, 50);
	} else if (window.innerWidth >= responsive.desktop && document.body.classList.contains('animate-menu')) {
		document.body.classList.remove('animate-menu');
	}
}

function initStoriesGallery() {
	document.querySelectorAll('.stories-gallery').forEach(sliderEl => {

		new Swiper(sliderEl, {
			slidesPerView: 'auto',
			spaceBetween: 20,
			loop: false,
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			breakpoints: {
				1440: {
					slidesPerView: 'auto',
					spaceBetween: 30,
				}
			}
		});
	});
}

function initReadMore() {
	document.querySelectorAll('.stories-box .text-read-more .text').forEach(text => {
		let readMore;
		let init = false;

		function readMoreMode() {
			if (window.innerWidth < responsive.desktop) {
				if (!init) {
					init = true;
					readMore = new Readmore(text, {
						speed: 300,
						moreLink: '<span class="more">... <a href="#">Read more</a></span>',
						lessLink: false,
					});
				}
			}
			else {
				if (init) {
					readMore.destroy();
					init = false;
				}
			}
		}
		readMoreMode();
		window.addEventListener('resize', readMoreMode);

	});
}

function initKnowledgeGallery() {
	document.querySelectorAll('.knowledge-gallery').forEach(sliderEl => {

		new Swiper(sliderEl, {
			slidesPerView: 'auto',
			spaceBetween: 20,
			loop: false,
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			breakpoints: {
				992: {
					slidesPerView: 'auto',
					spaceBetween: 30,
				}
			}
		});
	});
}

function initParallax() {
	let mm = gsap.matchMedia();
	document.querySelectorAll('.image-holder').forEach(element => {
		const image = element.querySelector('.img-mask img');
		const icon = element.querySelector('.icon');

		if (image) {
			image.removeAttribute('loading');
		}

		mm.add("(min-width: "+responsive.desktop+"px)", () => {
			gsap.fromTo(image, {
				y: 0
			}, {
				y: 100,
				ease: "none",
				scrollTrigger: {
					trigger: element,
					start: "top bottom", 
					end: "bottom top",
					scrub: true,
				}
			});
			gsap.fromTo(icon, {
				y: 0
			}, {
				y: -300,
				ease: "none",
				scrollTrigger: {
					trigger: element,
					start: "top bottom", 
					end: "bottom top",
					scrub: true,
				}
			});
		});
	});

	document.querySelectorAll('.person-cards-section .image-shape').forEach(element => {
		const image = element.querySelector('.image-shape-holder');

		mm.add("(min-width: "+responsive.desktop+"px)", () => {
			gsap.fromTo(image, {
				y: 0
			}, {
				y: -200,
				ease: "none",
				scrollTrigger: {
					trigger: element,
					start: "top bottom", 
					end: "bottom top",
					scrub: true,
				}
			});
		});
	});

	document.querySelectorAll('.cta-section').forEach(section => {
		const image = section.querySelector('.bg');
		
		mm.add("(min-width: "+responsive.desktop+"px)", () => {
			gsap.fromTo(image, {
				y: 0
			}, {
				y: 300,
				ease: "none",
				scrollTrigger: {
					trigger: section,
					start: "top bottom", 
					end: "bottom top",
					scrub: true,
				}
			});
		});
	});
}

// dev2
function getSiblings(element) {
	let siblings = [];

	if(!element.parentNode) {
		return siblings;
	}

	let sibling = element.parentNode.firstChild;

	while(sibling) {
		if(sibling.nodeType === 1 && sibling !== element) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling;
	}
	return siblings;
}

function elementInViewport(el, offsetBottom) {
	let top = el.offsetTop;
	let left = el.offsetLeft;
	const width = el.offsetWidth;
	const height = el.offsetHeight;
	offsetBottom = offsetBottom ? offsetBottom : 0;

	while (el.offsetParent) {
		el = el.offsetParent;
		top += el.offsetTop;
		left += el.offsetLeft;
	}

	return (
		top < (window.pageYOffset + window.innerHeight - (window.innerHeight / 100 * offsetBottom)) &&
		left < (window.pageXOffset + window.innerWidth) &&
		(top + height) > window.pageYOffset &&
		(left + width) > window.pageXOffset
	);
}

const getOffsetYRelativeDocument = (element) => {
	const RECT = element.getBoundingClientRect();
	return RECT.top + window.scrollY;
}

function getHeaderHeight() {
	return document.querySelector('#header').offsetHeight;
}

function setPropertyHeaderHeight() {
	const HEADER = document.querySelector('#header');
	const RESIZE_DELAY = 300;

	if(HEADER) {
		window.addEventListener('load', run);
		window.addEventListener('resize', function() {
			setTimeout((function() {
				run();
			}), RESIZE_DELAY);
		});

		function run() {
			document.documentElement.style.setProperty('--header-height', getHeaderHeight() + 'px');
		}
	}
}

function initPageLoadedClass() {
	window.addEventListener('load', function() {
		document.documentElement.classList.add('page-loaded');
	});
}

// main-menu
function toggleMainMenu() {
	const MAIN_MENU_OPENED_CLASS = 'menu-opened';

	if(!document.body.classList.contains(MAIN_MENU_OPENED_CLASS)) {
		document.body.classList.add(MAIN_MENU_OPENED_CLASS);
	} else {
		document.body.classList.remove(MAIN_MENU_OPENED_CLASS);
	}
}

function initMainMenu() {
	const MAIN_MENU = document.querySelector('.main-menu');
	const BTN_MENU = document.querySelector('#header .btn-menu');

	if(MAIN_MENU && BTN_MENU) {
		BTN_MENU.addEventListener('click', event => {
			event.preventDefault();
			toggleMainMenu();
		});
	}
}

function initCustomDropdown() {
	const CUSTOM_DROPDOWN_NL = document.querySelectorAll('.custom-dropdown');

	if(CUSTOM_DROPDOWN_NL.length) {
		Array.from(CUSTOM_DROPDOWN_NL).forEach(CUSTOM_DROPDOWN_EL => {
			const CUSTOM_DROPDOWN_OPENED_CLASS = 'custom-dropdown-opened';
			const CUSTOM_DROPDOWN_OPENER = CUSTOM_DROPDOWN_EL.querySelector('.custom-dropdown-toggle');
			const CUSTOM_DROPDOWN_ITEMS_NL = CUSTOM_DROPDOWN_EL.querySelectorAll('.custom-dropdown-menu button');

			if(CUSTOM_DROPDOWN_OPENER) {
				CUSTOM_DROPDOWN_OPENER.addEventListener('click', event => {
					event.preventDefault();
					CUSTOM_DROPDOWN_EL.classList.toggle(CUSTOM_DROPDOWN_OPENED_CLASS);
				});
			}

			document.addEventListener('click', event => {
				if(!CUSTOM_DROPDOWN_EL.contains(event.target)) {
					CUSTOM_DROPDOWN_EL.classList.remove(CUSTOM_DROPDOWN_OPENED_CLASS);
				}
			});

			if(CUSTOM_DROPDOWN_OPENER && CUSTOM_DROPDOWN_ITEMS_NL.length) {
				Array.from(CUSTOM_DROPDOWN_ITEMS_NL).forEach(CUSTOM_DROPDOWN_ITEM_EL => {
					CUSTOM_DROPDOWN_ITEM_EL.addEventListener('click', event => {
						event.preventDefault();
						CUSTOM_DROPDOWN_EL.classList.remove(CUSTOM_DROPDOWN_OPENED_CLASS);
					});
				});
			}
		});
	}
}

function initProjectsSection() {
	const PROJECTS_SECTION_NL = document.querySelectorAll('.projects-section');
	const PROJECTS_SECTION_TAB_ACTIVE_CLASS = 'active';

	if(PROJECTS_SECTION_NL.length) {
		Array.from(PROJECTS_SECTION_NL).forEach(PROJECTS_SECTION_EL => {
			const PROJECTS_SECTION_NAV_ITEMS_NL = PROJECTS_SECTION_EL.querySelectorAll('.projects-section-nav-item');
			const PROJECTS_SECTION_TABS_NL = PROJECTS_SECTION_EL.querySelectorAll('.projects-section-tab');

			if(PROJECTS_SECTION_NAV_ITEMS_NL.length && PROJECTS_SECTION_TABS_NL.length) {
				Array.from(PROJECTS_SECTION_NAV_ITEMS_NL).forEach(PROJECTS_SECTION_NAV_ITEM_EL => {
					PROJECTS_SECTION_NAV_ITEM_EL.addEventListener('click', event => {
						event.preventDefault();

						Array.from(PROJECTS_SECTION_TABS_NL).forEach(PROJECTS_SECTION_TAB_EL => {
							if(PROJECTS_SECTION_NAV_ITEM_EL.getAttribute('data-id') === PROJECTS_SECTION_TAB_EL.getAttribute('id')) {
								PROJECTS_SECTION_TAB_EL.classList.add(PROJECTS_SECTION_TAB_ACTIVE_CLASS);

								getSiblings(PROJECTS_SECTION_TAB_EL).forEach(sibEl => {
									sibEl.classList.remove(PROJECTS_SECTION_TAB_ACTIVE_CLASS);
								});
							}
						});

						Array.from(PROJECTS_SECTION_NAV_ITEMS_NL).forEach(PROJECTS_SECTION_NAV_EL => {
							if(PROJECTS_SECTION_NAV_EL === PROJECTS_SECTION_NAV_ITEM_EL) {
								PROJECTS_SECTION_NAV_EL.classList.add(PROJECTS_SECTION_TAB_ACTIVE_CLASS);
							} else {
								PROJECTS_SECTION_NAV_EL.classList.remove(PROJECTS_SECTION_TAB_ACTIVE_CLASS);
							}
						});
					});
				});
			}
		});
	}
}

function initPublicationsCardsCarousel() {
	const PUBLICATIONS_CARDS_CAROUSEL_NL = document.querySelectorAll('.publications-cards-carousel');

	Array.from(PUBLICATIONS_CARDS_CAROUSEL_NL).forEach(PUBLICATIONS_CARDS_CAROUSEL_EL => {
		const PUBLICATIONS_CARDS_CAROUSEL_SL = PUBLICATIONS_CARDS_CAROUSEL_EL.querySelector('.swiper-container');
		const PUBLICATIONS_CARDS_CAROUSEL_SCROLLBAR = PUBLICATIONS_CARDS_CAROUSEL_EL.querySelector('.swiper-scrollbar');
		const PUBLICATIONS_CARDS_CAROUSEL_OPT = {
			init: false,
			loop: false,
			freeMode: false,
			slidesPerView: 1,
			simulateTouch: true,
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
			},
			scrollbar: {
				el: PUBLICATIONS_CARDS_CAROUSEL_SCROLLBAR,
				hide: false,
				draggable: true,
			},
		}
		let PUBLICATIONS_CARDS_CAROUSEL_SW = undefined;

		function initCarouselSwiper() {
			if(PUBLICATIONS_CARDS_CAROUSEL_SW === undefined) {
				PUBLICATIONS_CARDS_CAROUSEL_SW = new Swiper(PUBLICATIONS_CARDS_CAROUSEL_SL, PUBLICATIONS_CARDS_CAROUSEL_OPT);
				PUBLICATIONS_CARDS_CAROUSEL_SW.init();
			}
		}

		initCarouselSwiper();
	});
}

function initPageNav() {
	const PAGE_NAV_NL = document.querySelectorAll('.page-nav');
	const PAGE_NAV_ITEM_ACTIVE_CLASS = 'active';

	if(PAGE_NAV_NL.length) {
		Array.from(PAGE_NAV_NL).forEach(PAGE_NAV_EL => {
			const PAGE_NAV_BTN_NL = PAGE_NAV_EL.querySelectorAll('a');
			
			if(PAGE_NAV_BTN_NL.length) {
				Array.from(PAGE_NAV_BTN_NL).forEach(PAGE_NAV_BTN_EL => {
					PAGE_NAV_BTN_EL.addEventListener('click', event => {
						getSiblings(PAGE_NAV_BTN_EL.parentNode).forEach(sibEl => {
							sibEl.classList.remove(PAGE_NAV_ITEM_ACTIVE_CLASS);
						});
						PAGE_NAV_BTN_EL.parentNode.classList.add(PAGE_NAV_ITEM_ACTIVE_CLASS);
					});
				});
			}
		});
	}
}

function initInfoSection() {
	const INFO_SECTION_NL = document.querySelectorAll('.info-section');
	
	if(INFO_SECTION_NL.length) {
		Array.from(INFO_SECTION_NL).forEach(INFO_SECTION_EL => {
			const INFO_SECTION_IMAGE = INFO_SECTION_EL.querySelector('.info-section-image');

			if(INFO_SECTION_IMAGE) {
				window.addEventListener('load', run);
				window.addEventListener('resize', run);
				window.addEventListener('scroll', run);

				function run() {
					if(document.documentElement.scrollTop >= getOffsetYRelativeDocument(INFO_SECTION_IMAGE) - getHeaderHeight() - 50) {
						INFO_SECTION_EL.classList.add('info-section-visible');
					}
				}
			}
		});
	}
}

function initPersonCardsSection() {
	const PERSON_CARDS_SECTION_NL = document.querySelectorAll('.person-cards-section');
	const HIDDEN_CLASS = 'd-none';
	const PERSON_CARDS_SECTION_NAV_ACTIVE_CLASS = 'active';

	if(PERSON_CARDS_SECTION_NL.length) {
		Array.from(PERSON_CARDS_SECTION_NL).forEach(PERSON_CARDS_SECTION_EL => {
			const PERSON_CARDS_SECTION_NAV = PERSON_CARDS_SECTION_EL.querySelector('.filters-nav');
			const PERSON_CARDS_SECTION_CAROUSEL = PERSON_CARDS_SECTION_EL.querySelector('.person-cards-carousel');

			if(PERSON_CARDS_SECTION_CAROUSEL) {
				const PERSON_CARDS_SECTION_CAROUSEL_SL = PERSON_CARDS_SECTION_CAROUSEL.querySelector('.swiper-container');
				const PERSON_CARDS_SECTION_CAROUSEL_SLIDES_NL = PERSON_CARDS_SECTION_CAROUSEL.querySelectorAll('.swiper-slide');
				const PERSON_CARDS_SECTION_CAROUSEL_SCROLLBAR = PERSON_CARDS_SECTION_CAROUSEL.querySelector('.swiper-scrollbar');
				const PERSON_CARDS_SECTION_CAROUSEL_OPT = {
					init: false,
					loop: false,
					freeMode: false,
					slidesPerView: 1,
					simulateTouch: true,
					slideClass: 'swiper-slide',
					scrollbar: {
						el: PERSON_CARDS_SECTION_CAROUSEL_SCROLLBAR,
						hide: false,
						draggable: true,
					},
					breakpoints: {
						768: {
							slidesPerView: 2,
						},
						992: {
							slidesPerView: 3,
						},
					},
				}
				let PERSON_CARDS_SECTION_CAROUSEL_SW = undefined;

				function initCarouselSwiper() {
					if(window.innerWidth >= responsive.desktop) {
						if(PERSON_CARDS_SECTION_CAROUSEL_SW === undefined) {
							PERSON_CARDS_SECTION_CAROUSEL_SW = new Swiper(PERSON_CARDS_SECTION_CAROUSEL_SL, PERSON_CARDS_SECTION_CAROUSEL_OPT);
							PERSON_CARDS_SECTION_CAROUSEL_SW.init();
						}
					} else {
						if (PERSON_CARDS_SECTION_CAROUSEL_SW !== undefined) {
							PERSON_CARDS_SECTION_CAROUSEL_SW.destroy(false, true);
							PERSON_CARDS_SECTION_CAROUSEL_SW = undefined;
						}
					}
				}

				initCarouselSwiper();

				window.addEventListener('resize', function() {
					initCarouselSwiper();
				});

				if(PERSON_CARDS_SECTION_NAV && PERSON_CARDS_SECTION_CAROUSEL_SLIDES_NL.length) {
					const PERSON_CARDS_SECTION_NAV_BTNS_NL = PERSON_CARDS_SECTION_NAV.querySelectorAll('button');
					
					if(PERSON_CARDS_SECTION_NAV_BTNS_NL.length) {
						Array.from(PERSON_CARDS_SECTION_NAV_BTNS_NL).forEach(PERSON_CARDS_SECTION_NAV_BTN_EL => {
							PERSON_CARDS_SECTION_NAV_BTN_EL.addEventListener('click', event => {
								event.preventDefault();

								getSiblings(PERSON_CARDS_SECTION_NAV_BTN_EL.parentNode).forEach(sibEl => {
									sibEl.classList.remove(PERSON_CARDS_SECTION_NAV_ACTIVE_CLASS);
								});

								PERSON_CARDS_SECTION_NAV_BTN_EL.parentNode.classList.add(PERSON_CARDS_SECTION_NAV_ACTIVE_CLASS);

								PERSON_CARDS_SECTION_CAROUSEL_SW.destroy(false, true);
								PERSON_CARDS_SECTION_CAROUSEL_SW = undefined;

								Array.from(PERSON_CARDS_SECTION_CAROUSEL_SLIDES_NL).forEach(PERSON_CARDS_SECTION_CAROUSEL_SLIDE_EL => {
									if(PERSON_CARDS_SECTION_NAV_BTN_EL.getAttribute('data-category') === PERSON_CARDS_SECTION_CAROUSEL_SLIDE_EL.getAttribute('data-category')) {
										PERSON_CARDS_SECTION_CAROUSEL_SLIDE_EL.classList.remove(HIDDEN_CLASS);
									} else {
										PERSON_CARDS_SECTION_CAROUSEL_SLIDE_EL.classList.add(HIDDEN_CLASS);
									}
								});

								if(PERSON_CARDS_SECTION_CAROUSEL_SW === undefined) {
									PERSON_CARDS_SECTION_CAROUSEL_SW = new Swiper(PERSON_CARDS_SECTION_CAROUSEL_SL, PERSON_CARDS_SECTION_CAROUSEL_OPT);
									PERSON_CARDS_SECTION_CAROUSEL_SW.init();
								}
							});
						});
					}
				}
			}
		});
	}
}

function initPeopleCardsCarousel() {
	const PEOPLE_CARDS_CAROUSEL_NL = document.querySelectorAll('.people-cards-carousel');

	Array.from(PEOPLE_CARDS_CAROUSEL_NL).forEach(PEOPLE_CARDS_CAROUSEL_EL => {
		const PEOPLE_CARDS_CAROUSEL_SL = PEOPLE_CARDS_CAROUSEL_EL.querySelector('.swiper-container');
		const PEOPLE_CARDS_CAROUSEL_OPT = {
			init: false,
			loop: false,
			freeMode: false,
			slidesPerView: 'auto',
			simulateTouch: true,
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
			},
		}
		let PEOPLE_CARDS_CAROUSEL_SW = undefined;

		function initCarouselSwiper() {
			if(window.innerWidth < responsive.desktop) {
				if(PEOPLE_CARDS_CAROUSEL_SW === undefined) {
					PEOPLE_CARDS_CAROUSEL_SW = new Swiper(PEOPLE_CARDS_CAROUSEL_SL, PEOPLE_CARDS_CAROUSEL_OPT);
					PEOPLE_CARDS_CAROUSEL_SW.init();
				}
			} else {
				if(PEOPLE_CARDS_CAROUSEL_SW !== undefined) {
					PEOPLE_CARDS_CAROUSEL_SW.destroy(false, true);
					PEOPLE_CARDS_CAROUSEL_SW = undefined;
				}
			}
		}

		initCarouselSwiper();

		window.addEventListener('resize', function() {
			initCarouselSwiper();
		});
	});
}

function initVacanciesCardsCarousel() {
	const VACANCIES_CARDS_CAROUSEL_NL = document.querySelectorAll('.vacancies-cards-carousel');

	Array.from(VACANCIES_CARDS_CAROUSEL_NL).forEach(VACANCIES_CARDS_CAROUSEL_EL => {
		const VACANCIES_CARDS_CAROUSEL_SL = VACANCIES_CARDS_CAROUSEL_EL.querySelector('.swiper-container');
		const VACANCIES_CARDS_CAROUSEL_SCROLLBAR = VACANCIES_CARDS_CAROUSEL_EL.querySelector('.swiper-scrollbar');
		const VACANCIES_CARDS_CAROUSEL_OPT = {
			init: false,
			loop: false,
			freeMode: false,
			slidesPerView: 1,
			simulateTouch: true,
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
			},
			scrollbar: {
				el: VACANCIES_CARDS_CAROUSEL_SCROLLBAR,
				hide: false,
				draggable: true,
			},
		}
		let VACANCIES_CARDS_CAROUSEL_SW = undefined;

		function initCarouselSwiper() {
			if(VACANCIES_CARDS_CAROUSEL_SW === undefined) {
				VACANCIES_CARDS_CAROUSEL_SW = new Swiper(VACANCIES_CARDS_CAROUSEL_SL, VACANCIES_CARDS_CAROUSEL_OPT);
				VACANCIES_CARDS_CAROUSEL_SW.init();
			}
		}

		initCarouselSwiper();
	});
}

function initUniversityCardsCarousel() {
	const UNIVERSITY_CARDS_CAROUSEL_NL = document.querySelectorAll('.university-cards-carousel');

	Array.from(UNIVERSITY_CARDS_CAROUSEL_NL).forEach(UNIVERSITY_CARDS_CAROUSEL_EL => {
		const UNIVERSITY_CARDS_CAROUSEL_SL = UNIVERSITY_CARDS_CAROUSEL_EL.querySelector('.swiper-container');
		const UNIVERSITY_CARDS_CAROUSEL_SCROLLBAR = UNIVERSITY_CARDS_CAROUSEL_EL.querySelector('.swiper-scrollbar');
		const UNIVERSITY_CARDS_CAROUSEL_OPT = {
			init: false,
			loop: false,
			freeMode: false,
			slidesPerView: 1,
			simulateTouch: true,
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 'auto',
				},
			},
			scrollbar: {
				el: UNIVERSITY_CARDS_CAROUSEL_SCROLLBAR,
				hide: false,
				draggable: true,
			},
		}
		let UNIVERSITY_CARDS_CAROUSEL_SW = undefined;

		function initCarouselSwiper() {
			if(UNIVERSITY_CARDS_CAROUSEL_SW === undefined) {
				UNIVERSITY_CARDS_CAROUSEL_SW = new Swiper(UNIVERSITY_CARDS_CAROUSEL_SL, UNIVERSITY_CARDS_CAROUSEL_OPT);
				UNIVERSITY_CARDS_CAROUSEL_SW.init();
			}
		}

		initCarouselSwiper();
	});
}

function initCustomScroll() {
	const CUSTOM_SCROLL_NL = document.querySelectorAll('.custom-v-scroll');
	
	if (CUSTOM_SCROLL_NL) {
		const CUSTOM_SCROLL_OPTIONS = {
			autoHide: false,
		}

		Array.from(CUSTOM_SCROLL_NL).forEach(function(CUSTOM_SCROLL_EL) {
			new SimpleBar(CUSTOM_SCROLL_EL, CUSTOM_SCROLL_OPTIONS);
		});
	}
}

function initLogosCarousel() {
	const LOGOS_CAROUSEL_NL = document.querySelectorAll('.logos-carousel');

	Array.from(LOGOS_CAROUSEL_NL).forEach(LOGOS_CAROUSEL_EL => {
		const LOGOS_CAROUSEL_SL = LOGOS_CAROUSEL_EL.querySelector('.swiper-container');
		const LOGOS_CAROUSEL_OPT = {
			init: false,
			loop: false,
			freeMode: false,
			slidesPerView: 'auto',
			simulateTouch: true,
			centerInsufficientSlides: true,
		}
		let LOGOS_CAROUSEL_SW = undefined;

		function initCarouselSwiper() {
			if(LOGOS_CAROUSEL_SW === undefined) {
				LOGOS_CAROUSEL_SW = new Swiper(LOGOS_CAROUSEL_SL, LOGOS_CAROUSEL_OPT);
				LOGOS_CAROUSEL_SW.init();
			}
		}

		initCarouselSwiper();
	});
}

function initExtraCardsSection() {
	const EXTRA_CARDS_SECTION_NL = document.querySelectorAll('.extra-cards-section');
	const EXTRA_CARDS_DELAY = 2000;

	if(EXTRA_CARDS_SECTION_NL.length) {
		Array.from(EXTRA_CARDS_SECTION_NL).forEach(EXTRA_CARDS_SECTION_EL => {
			const EXTRA_CARDS_GROUP = EXTRA_CARDS_SECTION_EL.querySelector('.extra-cards-group');

			if(EXTRA_CARDS_GROUP) {
				run();
				window.addEventListener('scroll', run);

				function run() {
					if(elementInViewport(EXTRA_CARDS_GROUP)) {
						setTimeout((() => {
							EXTRA_CARDS_GROUP.classList.add('extra-cards-group-visible');
						}), EXTRA_CARDS_DELAY);
					}
				}
			}
		});
	}
}

function initStoriesCardsCarousel() {
	const storiesCardsSections = document.querySelectorAll('.stories-cards-section');

	if (storiesCardsSections.length) {
		const mm = gsap.matchMedia();
		
		gsap.registerPlugin(ScrollTrigger);
		
		storiesCardsSections.forEach(parentEL => {
			const STORIES_CARDS_CAROUSEL_SL = parentEL.querySelector('.stories-cards-carousel .swiper-container');

			if (STORIES_CARDS_CAROUSEL_SL) {
				const STORIES_CARDS_CAROUSEL_OPT = {
					init: false,
					slidesPerView: 1,
					allowTouchMove: true,
					breakpoints: {
						992: {
							allowTouchMove: false,
						}
					},
				}
				let STORIES_CARDS_CAROUSEL_SW = undefined;
		
				function initCarouselSwiper() {
					if(STORIES_CARDS_CAROUSEL_SW === undefined) {
						STORIES_CARDS_CAROUSEL_SW = new Swiper(STORIES_CARDS_CAROUSEL_SL, STORIES_CARDS_CAROUSEL_OPT);
						STORIES_CARDS_CAROUSEL_SW.init();

						mm.add("(min-width: "+responsive.desktop+"px)", () => {
							ScrollTrigger.create({
								trigger: parentEL,
								start: 'top top',
								end: 'bottom bottom',
								// markers: true,
								onUpdate: (self) => {
									STORIES_CARDS_CAROUSEL_SW.setProgress(self.progress.toFixed(3), 0);
								}
							});
						});
					}
				}
		
				initCarouselSwiper();
			}
			
			parentEL.querySelectorAll('.stories-cards-carousel .swiper-container').forEach(STORIES_CARDS_CAROUSEL_SL => {
			});
		});
	}
}

function initInformCardsSection() {
	const INFORM_CARDS_SECTION_NL = document.querySelectorAll('.inform-cards-section');
	const INFORM_CARDS_SECTION_SECOND_TAB_ACTIVE_CLASS = 'inform-cards-section-second-tab-active';
	const INFORM_CARDS_SECTION_SCROLLED_UP_CLASS = 'inform-cards-section-scrolled-up';

	if(INFORM_CARDS_SECTION_NL.length) {
		Array.from(INFORM_CARDS_SECTION_NL).forEach(INFORM_CARDS_SECTION_EL => {
			const INFORM_CARDS_SECTION_SCROLL_TRIGGER = INFORM_CARDS_SECTION_EL.querySelector('.inform-cards-section-scroll-trigger');

			window.addEventListener('load', detectSectionUp);
			window.addEventListener('resize', detectSectionUp);
			window.addEventListener('scroll', detectSectionUp);

			function detectSectionUp() {
				if(document.documentElement.scrollTop >= getOffsetYRelativeDocument(INFORM_CARDS_SECTION_EL)) {
					INFORM_CARDS_SECTION_EL.classList.add(INFORM_CARDS_SECTION_SCROLLED_UP_CLASS);
				} else {
					INFORM_CARDS_SECTION_EL.classList.remove(INFORM_CARDS_SECTION_SCROLLED_UP_CLASS);
				}
			}

			if(INFORM_CARDS_SECTION_SCROLL_TRIGGER) {
				window.addEventListener('load', run);
				window.addEventListener('resize', run);
				window.addEventListener('scroll', run);

				function run() {
					if((document.documentElement.scrollTop + window.innerHeight * 0.5) >= getOffsetYRelativeDocument(INFORM_CARDS_SECTION_SCROLL_TRIGGER)) {
						if(elementInViewport(INFORM_CARDS_SECTION_SCROLL_TRIGGER)) {
							document.documentElement.classList.add('theme-green');
							document.documentElement.classList.remove('theme-light', 'theme-ligth-blue');
						}

						INFORM_CARDS_SECTION_EL.classList.add(INFORM_CARDS_SECTION_SECOND_TAB_ACTIVE_CLASS);
					} else {
						if(!elementInViewport(INFORM_CARDS_SECTION_SCROLL_TRIGGER)) {
							document.documentElement.classList.remove('theme-green');
						}

						INFORM_CARDS_SECTION_EL.classList.remove(INFORM_CARDS_SECTION_SECOND_TAB_ACTIVE_CLASS);
					}
				}
			}
		});
	}
}

function initImageCardsCarousel() {
	const IMAGE_CARDS_CAROUSEL_NL = document.querySelectorAll('.image-cards-carousel');

	Array.from(IMAGE_CARDS_CAROUSEL_NL).forEach(IMAGE_CARDS_CAROUSEL_EL => {
		const IMAGE_CARDS_CAROUSEL_SL = IMAGE_CARDS_CAROUSEL_EL.querySelector('.swiper-container');
		const IMAGE_CARDS_CAROUSEL_OPT = {
			init: false,
			loop: false,
			freeMode: false,
			slidesPerView: 2,
			simulateTouch: true,
			initialSlide: 1,
			mousewheel: {
				releaseOnEdges: true,
				sensitivity: 5,
			},
		}
		let IMAGE_CARDS_CAROUSEL_SW = undefined;

		function initCarouselSwiper() {
			if(window.innerWidth >= responsive.desktop) {
				if(IMAGE_CARDS_CAROUSEL_SW === undefined) {
					IMAGE_CARDS_CAROUSEL_SW = new Swiper(IMAGE_CARDS_CAROUSEL_SL, IMAGE_CARDS_CAROUSEL_OPT);
					IMAGE_CARDS_CAROUSEL_SW.init();
				}
			} else {
				if (IMAGE_CARDS_CAROUSEL_SW !== undefined) {
					IMAGE_CARDS_CAROUSEL_SW.destroy(false, true);
					IMAGE_CARDS_CAROUSEL_SW = undefined;
				}
			}
		}

		initCarouselSwiper();

		window.addEventListener('resize', function() {
			initCarouselSwiper();
		});

		function run() {
			if(elementInViewport(IMAGE_CARDS_CAROUSEL_EL)) {
				IMAGE_CARDS_CAROUSEL_EL.classList.add('image-cards-carousel-visible');
			}
		}

		run();
		window.addEventListener('scroll', run);
	});
}

function initAnimationTextInUp() {
	const ANIMATION_TEXT_IN_UP_NL = document.querySelectorAll('.animation-text-in-up');
	const ANIMATION_TEXT_IN_UP_ANIMATED_CLASS = 'animation-text-in-up-animated';

	if(ANIMATION_TEXT_IN_UP_NL.length) {
		Array.from(ANIMATION_TEXT_IN_UP_NL).forEach(function(ANIMATION_TEXT_IN_UP_EL) {
			ANIMATION_TEXT_IN_UP_EL.innerHTML = ANIMATION_TEXT_IN_UP_EL.textContent.replace(/ (-|#|@){1}/g, s => s[1]+s[0]).replace(/(\S*)/g, m => {
				return `<span class="word">` + m.replace(/\S(-|#|@)?/g, "<span class='letter'>$&</span>") + `</span>`;
			});

			function run() {
				if(elementInViewport(ANIMATION_TEXT_IN_UP_EL)) {
					ANIMATION_TEXT_IN_UP_EL.classList.add(ANIMATION_TEXT_IN_UP_ANIMATED_CLASS);
				}
			}

			run();
			window.addEventListener('scroll', run);
		});
	}
}

function initAnimations() {
	const DURATION = 500;
	const SHOWING_CLASS = 'showing';
	const SHOWN_CLASS = 'shown';

	run();
	window.addEventListener('scroll', run);
	window.addEventListener('resize', run);

	function run() {
		document.querySelectorAll('.animation').forEach((el, ix) => {
			const delayTime = 300;

			if(elementInViewport(el)) {
				setTimeout(() => {
					el.classList.add(SHOWING_CLASS);
				}, delayTime + (ix * 50));

				setTimeout(() => {
					if (!el.classList.contains(SHOWN_CLASS)) {
						el.classList.add(SHOWN_CLASS);
					}
				}, DURATION + delayTime + (ix * 50));
			}
		});

		document.querySelectorAll('.animation-child-elements').forEach(el => {
			const delayTime = 200;

			Array.from(el.children).forEach((childEl, ix) => {
				if (elementInViewport(childEl)) {
					setTimeout(() => {
						childEl.classList.add(SHOWING_CLASS);
					}, delayTime * ix);

					setTimeout(() => {
						if (!childEl.classList.contains(SHOWN_CLASS)) {
							childEl.classList.add(SHOWN_CLASS);
						}
					}, DURATION + delayTime * ix);
				}
			});
		});
	}
}

function initAppear() {
	const APPEAR_NL = document.querySelectorAll('.appear-element');
	
	if(APPEAR_NL) {
		Array.from(APPEAR_NL).forEach(function(APPEAR_EL) {
			run();
			window.addEventListener('scroll', run);

			function run() {
				if(elementInViewport(APPEAR_EL)) {
					APPEAR_EL.classList.add('appear-element-visible');
				} else {
					APPEAR_EL.classList.remove('appear-element-visible');
				}
			}
		});
	}
}

function initBodyBg() {
	const classHolder = document.documentElement;
	const LIGHT_SECTIONS_NL = document.querySelectorAll('[data-light-section]');
	const LIGHT_BLUE_SECTIONS_NL = document.querySelectorAll('[data-ligth-blue-section]');

	if(LIGHT_SECTIONS_NL.length) {
		const options = {
			threshold: Array.from({ length: 1000 }, (_, i) => i / 1000)
		};
		const observer = new IntersectionObserver(callback, options);

		function callback(entries) {
			let isActiveNow = false;

			entries.forEach((entry) => {
				const ratio = entry.target.dataset.ratio ? parseFloat(entry.target.dataset.ratio) : 0.3;

				if (entry.intersectionRatio > ratio) {
					entry.target.classList.add('active');

					if (!classHolder.classList.contains('theme-light')) {
						classHolder.classList.remove('theme-ligth-blue', 'theme-green');
						classHolder.classList.add('theme-light')
					}
				
				} else {
					entry.target.classList.remove('active');

					document.querySelectorAll('[data-light-section]').forEach(el => {
						if (el.classList.contains('active') && !isActiveNow) {
							isActiveNow = true;
						}
					});

					if (!isActiveNow) {
						classHolder.classList.remove('theme-light');
					}
				}
			});
		}

		LIGHT_SECTIONS_NL.forEach(el => {
			observer.observe(el);
		});
	}

	if(LIGHT_BLUE_SECTIONS_NL.length) {
		const options = {
			threshold: Array.from({ length: 1000 }, (_, i) => i / 1000)
		};
		const observer = new IntersectionObserver(callback, options);

		function callback(entries) {
			let isActiveNow = false;

			entries.forEach((entry) => {
				const ratio = entry.target.dataset.ratio ? parseFloat(entry.target.dataset.ratio) : 0.3;

				if (entry.intersectionRatio > ratio) {
					entry.target.classList.add('active');

					if (!classHolder.classList.contains('theme-ligth-blue')) {
						classHolder.classList.remove('theme-light');
						classHolder.classList.add('theme-ligth-blue')
					}
				
				} else {
					entry.target.classList.remove('active');

					document.querySelectorAll('[data-ligth-blue-section]').forEach(el => {
						if (el.classList.contains('active') && !isActiveNow) {
							isActiveNow = true;
						}
					});

					if (!isActiveNow) {
						classHolder.classList.remove('theme-ligth-blue');
					}
				}
			});
		}

		LIGHT_BLUE_SECTIONS_NL.forEach(el => {
			observer.observe(el);
		});
	}
}

// dev3
function initPlyr() {
	document.querySelectorAll('.plyr__video-embed').forEach(playerEL => {
		const player = new Plyr(playerEL);
		playerEL.plyrApi = player;
	});
}
// dev4

// jQuery
// (function($){
// 	$(document).ready(function() {
// 	}); // ready

// 	$(window).on('resize', function() {
// 	}); // resize

// 	$(window).on('load', function() {
// 	}); // load

// 	// jQuery functions
// })(this.jQuery);
