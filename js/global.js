let nav = document.getElementById("nav");

let params = new URLSearchParams(window.location.search);
let page = "home";

if(params.has("page")) {
    page = params.get("page");
}