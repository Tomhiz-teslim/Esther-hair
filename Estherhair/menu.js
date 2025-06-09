document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');

    console.log('menuToggle:', menuToggle);  // should NOT be null
    console.log('mobileMenu:', mobileMenu);  // should NOT be null
    console.log('closeMenu:', closeMenu);    // should NOT be null

    if (menuToggle && mobileMenu && closeMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('open');
            menuToggle.classList.add('hide');
        });

        closeMenu.addEventListener('click', () => {
            console.log('Close clicked');
            mobileMenu.classList.remove('open');
            menuToggle.classList.remove('hide');
        });

        document.querySelectorAll('.mobile-menu ul li a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                menuToggle.classList.remove('hide');
            });
        });
    } else {
        console.error("One or more elements not found!");
    }
});
