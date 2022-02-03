'use strict'

// make navbar transparent when it is on the top
// 네비바가 상단에 있을때만 투명화
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar__dark');
    } else {
        navbar.classList.remove('navbar__dark');
    }
});

// handle scrolling when tapping on the navbar menu
// 누르면 그 위치로 부드럽게 스크롤링 scrollIntoView() 사용.
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView(link)
})

// handle click on "contact me" button on home
const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', () => {
    scrollIntoView('#contact')
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}