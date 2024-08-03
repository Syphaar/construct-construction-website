let hamburger = document.querySelector('.hamburger');
hamburger.onclick = function() {
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
}


// ACTIVE LINKS
const navLinkEls = document.querySelectorAll('.nav_link');
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl => {
    if (navLinkEl.href.includes(windowPathname)) {
        navLinkEl.classList.add('active');
    }
});
