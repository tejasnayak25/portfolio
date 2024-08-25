function hideCurrentPage() {
    let page1 = document.querySelector(".active-page");
    page1.classList.replace("flex", "hidden");
    page1.classList.remove("active-page");
}

function render(id) {
    let elem = document.getElementById(id);
    elem.classList.replace("hidden", "flex");
    elem.classList.add("active-page");
}

let pages = {
    "home": {
        navigate: () => {
            render("home");
        }
    },
    "about": {
        navigate: () => {
            render("about")
        }
    },
    "skills": {
        navigate: () => {
            render("skills")
        }
    },
    "projects": {
        navigate: () => {
            render("projects")
        }
    },
    "contact": {
        navigate: () => {
            render("contact")
        }
    }
}

nav.querySelectorAll("a").forEach(a => {
    a.onclick = () => {
        let url = new URL(location.href);
        url.searchParams.set("page", a.getAttribute("data-target"));
        location.href = url.href;
    }
});

nav.querySelectorAll("a").forEach(a => {
    if(a.getAttribute("data-target") === page) {
        hideCurrentPage();
        nav.querySelector(".active-link").classList.remove("active-link");
        a.classList.add("active-link");
        pages[page].navigate();
    }
});

// nav.querySelector("a").nextElementSibling.nextElementSibling.nextElementSibling.click();