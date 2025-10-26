let mmBtn = document.getElementById("mobile-menu-btn");
let line1 = mmBtn ? mmBtn.querySelector('.line1') : null;
let line2 = mmBtn ? mmBtn.querySelector('.line2') : null;
let line3 = mmBtn ? mmBtn.querySelector('.line3') : null;

if (mmBtn) {
    mmBtn.addEventListener('click', () => {
        if (!nav) return;
        const isOpen = nav.classList.toggle('open');
        // Animate lines into an X
        if (line1 && line2 && line3) {
            if (isOpen) {
                line1.classList.add('rotate-45', 'translate-y-2.5');
                line2.classList.add('opacity-0');
                line3.classList.add('-rotate-45', '-translate-y-2.5');
            } else {
                line1.classList.remove('rotate-45', 'translate-y-2.5');
                line2.classList.remove('opacity-0');
                line3.classList.remove('-rotate-45', '-translate-y-2.5');
            }
        }
        mmBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
}

function checkMobile() {
    let md = window.matchMedia('(min-width: 768px)').matches;
    let lg = window.matchMedia('(min-width: 1024px)').matches;

    if(lg || md) return false;
    return true;
}

let isMobile = checkMobile();