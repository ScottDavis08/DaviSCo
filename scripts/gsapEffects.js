gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

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
