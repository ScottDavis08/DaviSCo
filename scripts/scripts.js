document.addEventListener('DOMContentLoaded', function() {
    let isTextChanged = false;
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

window.addEventListener("scroll", function() {
    const navText = this.document.getElementById("headerName");

    if (this.window.scrollY > 50 && !isTextChanged) {
        isTextChanged = true;
        navText.classList.add("opacity-0", "scale-90");

        this.setTimeout(() => {
            navText.innerHTML = "DaviSCo";
            navText.classList.remove("opacity-0");
            navText.classList.add("scale-100");
        })
    } else if (this.window.scrollY <= 50 && isTextChanged) {
        isTextChanged = false;
        navText.classList.add("opacity-0", "scale-90");

        this.setTimeout(() => {
            navText.innerHTML = `
                <span class="block">Davis</span>
                <span class="block navScott">Scott</span>
                <span class="block navConsulting">Consulting</span>
            `;
            navText.classList.remove("opacity-0");
            navText.classList.add("scale-100");
        })
    }
});