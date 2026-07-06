document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("nav-menu-button").addEventListener("click", onNavToggleButtonClicked);
    document.getElementById("nav-close-button").addEventListener("click", onNavCloseButtonClicked);
});

function onNavToggleButtonClicked() {
    toggleNavMenu();
    updateAnimationDirection();
}

let isOpen = false;

function toggleNavMenu() {
    const navMenu = document.getElementById('site-nav-menu');
    isOpen = !isOpen;
    navMenu.classList.toggle('shown', isOpen);
    navMenu.setAttribute('aria-hidden', !isOpen);
}

function onNavCloseButtonClicked() {
    closeNavMenu();
    updateAnimationDirection();
}

function closeNavMenu() {
    const navMenu = document.getElementById('site-nav-menu');
    isOpen = false;
    navMenu.classList.remove('shown');
    navMenu.setAttribute('aria-hidden', true);
}

function updateAnimationDirection() {
    const navMenuIcon = document.querySelector('#nav-menu-button .ellipsis-icon');
    navMenuIcon.classList.remove('animate-right', 'animate-left');
    setTimeout(() => {
        navMenuIcon.classList.add(isOpen ? 'animate-right' : 'animate-left');
    }, 0);
}
