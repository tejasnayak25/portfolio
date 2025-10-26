let mmBtn = document.getElementById("mobile-menu-btn");
let mmIcon = mmBtn ? mmBtn.querySelector("i") : null;

if (mmBtn) {
    mmBtn.addEventListener('click', () => {
        if (!nav) return;
        nav.classList.toggle('open');
        if (mmIcon) mmIcon.innerText = nav.classList.contains('open') ? 'close' : 'menu';
    });
}

function checkMobile() {
    let md = window.matchMedia('(min-width: 768px)').matches;
    let lg = window.matchMedia('(min-width: 1024px)').matches;

    if(lg || md) return false;
    return true;
}

let isMobile = checkMobile();