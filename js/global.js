let nav = document.getElementById("nav");

let params = new URLSearchParams(window.location.search);
let page = "home";

if(params.has("page")) {
    page = params.get("page");
}

// function checkMobile() {
//     let md = window.matchMedia('(min-width: 768px)').matches;
//     let lg = window.matchMedia('(min-width: 1024px)').matches;
//     if(md || lg) {
//         return false;
//     } else {
//         return true;
//     }
// }

// let isMobile = checkMobile();