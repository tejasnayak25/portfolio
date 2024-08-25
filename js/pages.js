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
            var textWrapper = document.querySelector('#name');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

            anime({
                targets: "#hire-btn-arrow",
                right: 0
            });
            anime({
                targets: '#name .letter',
                opacity: [0,1],
                easing: "easeInOutQuad",
                duration: 1000,
                delay: (el, i) => 150 * (i+1)
            });
            anime({
                targets: '.img-round',
                borderRadius: "50%",
                duration: 1500
            });
            anime({
                targets: '.img',
                marginTop: 0,
                duration: 1500
            });
        }
    },
    "about": {
        navigate: () => {
            render("about");
            anime({
                targets: '.img-round',
                borderRadius: "50%",
                duration: 1500
            });
            anime({
                targets: '.img',
                marginTop: 0,
                duration: 1500
            });
        }
    },
    "skills": {
        navigate: () => {
            render("skills");
        }
    },
    "projects": {
        navigate: () => {
            render("loader");
        }
    },
    "contact": {
        navigate: () => {
            render("contact");

            anime({
                targets: '.skills-container',
                scale: 1.35,
                duration: 2000
            });
        }
    }
}

nav.querySelectorAll("a").forEach(a => {
    a.onclick = () => {
        let url = new URL(location.href);
        url.searchParams.set("page", a.getAttribute("data-target"));
        location.href = url.href;
    }

    a.onmouseover = () => {
        anime({
            targets: a.querySelector("div"),
            width: "100%",
            easing: 'easeInOutExpo',
            duration: 500
        });
    }

    a.onmouseout = () => {
        anime({
            targets: a.querySelector("div"),
            width: "0%",
            easing: 'easeInOutExpo',
            duration: 500
        });
    }
});

nav.querySelectorAll("a").forEach(a => {
    if(a.getAttribute("data-target") === page) {
        a.classList.add("active-link");
        pages[page].navigate();
    }
});

document.getElementById("share-btn").onclick = () => {
    let url = new URL(location.href);
    url.searchParams.keys().forEach(key => {
        url.searchParams.delete(key);
    });

    let shareData = {
        url: url.href,
        title: "Tejas Nayak",
        text: "Hi, I'm Tejas Nayak, a passionate fullstack developer with over 2 years of experience in building dynamic and user-focused web applications..."
    };
    
    if(navigator.canShare(shareData)) {
        navigator.share(shareData);
    }
}