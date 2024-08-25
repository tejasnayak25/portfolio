let mmBtn = document.getElementById("mobile-menu-btn");
let mmIcon = mmBtn.querySelector("i");

mmBtn.onclick = () => {
    if(nav.classList.contains("h-0")) {
        nav.classList.replace("h-0", "h-auto");
        nav.classList.replace("hidden", "flex");
        mmIcon.innerText = "close";
    } else {
        nav.classList.replace("h-auto", "h-0");
        nav.classList.replace("flex", "hidden");
        mmIcon.innerText = "menu";
    }
}

function checkMobile() {
    let md = window.matchMedia('(min-width: 768px)').matches;
    let lg = window.matchMedia('(min-width: 1024px)').matches;

    if(lg || md) return false;
    return true;
}

let isMobile = checkMobile();