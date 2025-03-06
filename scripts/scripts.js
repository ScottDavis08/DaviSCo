let isTextChanged = false;

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