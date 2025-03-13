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

function getSamePageAnchor(link) {
    if (
        link.protocol !== window.location.protocol ||
        link.host !== window.location.host ||
        link.pathname !== window.location.pathname ||
        link.search !== window.location.search
    ) {
        return false;
    }

    return link.hash;
}

function scrollToHash(hash, e) {
    const elem = hash ? document.querySelector(hash) : false;
    if (elem) {
        if (e) e.preventDefault();
        gsap.to(window, { scrollTo: elem });
    }
}

document.querySelectorAll('a[href]').forEach(a => {
    a.addEventListener('click', e => {
        scrollToHash(getSamePageAnchor(a), e);
        console.log("Clicked a link");
    });
});

scrollToHash(window.location.hash);
