gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

// Header animation
function initHeaderAnimation() {
    // Create a timeline for the header animation
    const headerTL = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "150px", // Increased scroll distance for smoother transition
            scrub: 1, // Increased scrub value for smoother animation
            toggleActions: "play reverse play reverse"
        }
    });

    headerTL
        .to("#headerName", {
            scale: 0.95,
            opacity: 0,
            duration: 0.5, // Increased duration
            ease: "power2.inOut" // Added easing function
        })
        .add(() => {
            document.querySelector("#headerName").innerHTML = "DaviSCo";
        })
        .to("#headerName", {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut"
        });

    // Reverse animation with smoother transition
    ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "150px",
        onLeaveBack: () => {
            gsap.to("#headerName", {
                scale: 0.95,
                opacity: 0,
                duration: 0.5,
                ease: "power2.inOut",
                onComplete: () => {
                    document.querySelector("#headerName").innerHTML = `
                        <span class="block">Davis</span>
                        <span class="block navScott">Scott</span>
                        <span class="block navConsulting">Consulting</span>
                    `;
                    gsap.to("#headerName", {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        ease: "power2.inOut"
                    });
                }
            });
        }
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initHeaderAnimation();
});

// Existing scroll functionality
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
    });
});

scrollToHash(window.location.hash);
