const HAMBURGER = document.querySelector('.js-hamburger');
const MOBILE_MENU = document.querySelector('.js-mobile-menu');
const CLOSE_MOBILE_MENU = document.querySelector('.js-close-mobile-menu');
const SUB_MENU_ACTIVATOR = document.querySelector('.js-sub-menu-activator');
const ANCHOR_LINK = document.querySelectorAll('.js-anchor-link');


/**
 * Get Offset from body
 * @param elem
 * @return {{top: number, left: number}}
 */
function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    let body = document.body;
    let docEl = document.documentElement;

    let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    let scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    let clientTop = docEl.clientTop || body.clientTop || 0;
    let clientLeft = docEl.clientLeft || body.clientLeft || 0;

    let top = box.top + scrollTop - clientTop;
    let left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
}

(HAMBURGER) && HAMBURGER.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.hamburger').style.display = 'none';

    (MOBILE_MENU) && MOBILE_MENU.classList.add('opened');
});

(CLOSE_MOBILE_MENU) && CLOSE_MOBILE_MENU.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.hamburger').style.display = 'inline-block';

    (MOBILE_MENU) && MOBILE_MENU.classList.remove('opened');
});

(SUB_MENU_ACTIVATOR) && SUB_MENU_ACTIVATOR.addEventListener('click', (event) => {
    event.preventDefault();
    event.target.nextElementSibling.classList.toggle('opened');
});


(ANCHOR_LINK) && [...ANCHOR_LINK].forEach(item => {
    item.addEventListener('click', (event) => {

        const HEADER_HEIGHT = document.querySelector('#site-header').offsetHeight;
        const target_offset = getCoords(document.querySelector(event.target.getAttribute('href')));

        window.scroll({
            'behavior': 'smooth',
            'left': 0,
            'top': target_offset.top - HEADER_HEIGHT - 20
        });

        (MOBILE_MENU) && MOBILE_MENU.classList.remove('opened');

    });
});

$(function () {
    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev">' +
            '<img src="images/arrow-l.png" alt="">',
        nextArrow: '<button type="button" class="slick-btn slick-next">' +
            '<img src="images/arrow-r.png" alt="">',
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        adaptiveHeight: true,
        responsive:[
            {
                breakpoint: 911,
                settings: {
                    arrows: false
                }}, {
                breakpoint: 376,
                settings: {
                    dots: false,
                    arrows: false
                }}]
            })
});



document.addEventListener("DOMContentLoaded", function () {
        const hideElement = document.querySelector('.sale') ;
        localStorage.setItem('display', 'none');
        localStorage.getItem('display');
        hideElement.style.display='none';
    });


