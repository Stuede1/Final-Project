// Mobile Menu Functionality

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.mobile-menu-btn');
    const closeButton = document.querySelector('.mobile-menu-close');
    const modalLinks = document.querySelector('.modal__links');
    const menuOverlay = document.createElement('div');
    menuOverlay.className = 'menu-overlay';
    document.body.appendChild(menuOverlay);

    function openMenu() {
        modalLinks.classList.add('menu--open');
        menuOverlay.classList.add('menu--open');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        modalLinks.classList.remove('menu--open');
        menuOverlay.classList.remove('menu--open');
        document.body.style.overflow = '';
    }

    // Toggle menu when clicking the hamburger button
    menuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        if (modalLinks.classList.contains('menu--open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close menu when clicking outside
    menuOverlay.addEventListener('click', closeMenu);
    
    // Close menu when clicking on a nav link
    document.querySelectorAll('.modal__link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    // Close menu when clicking the close button
    closeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        closeMenu();
    });
});