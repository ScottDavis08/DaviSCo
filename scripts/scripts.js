let isTextChanged = false;

document.addEventListener('DOMContentLoaded', function() {
    const toggleMenu = document.querySelector("#toggleMenu");
    const mobileMenu = document.querySelector("#mobileMenu");
    let isMenuOpen = false;

    toggleMenu.onclick = () => {
        isMenuOpen = !isMenuOpen;
        toggleMenu.classList.toggle("hamburger-toggle");
        mobileMenu.classList.toggle("menu-open");
        mobileMenu.classList.toggle("menu-closed");
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    };

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            toggleMenu.classList.remove("hamburger-toggle");
            mobileMenu.classList.remove("menu-open");
            mobileMenu.classList.add("menu-closed");
            document.body.style.overflow = 'auto';
        });
    });
});

