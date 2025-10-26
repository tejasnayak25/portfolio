function hideCurrentPage() {
    let page1 = document.querySelector(".active-page");
    page1.classList.replace("flex", "hidden");
    page1.classList.remove("active-page");
}

function render(id) {
    let elem = document.getElementById(id);
    elem.classList.replace("hidden", id === "projects" ? "grid" : "flex");
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
                right: 0,
                scaleX: 1
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

let shareWin = document.getElementById("share-win");

document.getElementById("share-close").onclick = () => {
    anime({
        targets: shareWin.firstElementChild,
        scale: 1,
        opacity: 0,
        duration: 500
    });
    setTimeout(() => {
        shareWin.classList.replace("flex", "hidden");
    }, 500);
}

let socialshare = document.getElementById("social-share");

let urls = {
    facebook: "https://www.facebook.com/sharer/sharer.php?u=",
    twitter: "https://twitter.com/intent/tweet?url=",
    linkedin: "https://www.linkedin.com/sharing/share-offsite/?url=",
    whatsapp: "https://api.whatsapp.com/send?text=",
    reddit: "https://www.reddit.com/submit?url=",
    tumblr: "https://www.tumblr.com/widgets/share/tool?posttype=link&canonicalUrl="
}

document.getElementById("share-btn").onclick = () => {
    let url = new URL(location.href);
    url.searchParams.keys().forEach(key => {
        url.searchParams.delete(key);
    });
    
    socialshare.querySelectorAll("a").forEach(a => {
        a.onclick = () => {
            let id = a.id.split("-btn")[0];
            if(id === "link") {
                navigator.clipboard.writeText(url.href);
                let icon = a.querySelector("i");
                icon.classList.replace("uil-link-alt", "uil-check");

                setTimeout(() => {
                    icon.classList.replace("uil-check", "uil-link-alt");
                }, 1000);
            } else if(id === "other") {
                let sharedata = {
                    url: url.href,
                    title: "Tejas Nayak",
                    text: "Hi, I'm Tejas Nayak, a passionate fullstack developer with over 2 years of experience in building dynamic and user-focused web applications..."
                }
                if(navigator.canShare(sharedata)) {
                    navigator.share(sharedata);
                }
            } else {
                let shareurl = urls[id];
                window.open(shareurl + url.href, "_blank");
            }
        }
    });

    shareWin.classList.replace("hidden", "flex");

    anime({
        targets: shareWin.firstElementChild,
        scale: 1.35,
        opacity: 1,
        duration: 500
    });
}