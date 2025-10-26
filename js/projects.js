let colors = [ "#2f4f4f", "#080808", "#3d0c02", "#3b3c36", "#52593b", "#704241", "#555d50", "#36454f", "#353839", "#32174d", "#1c2841"];

class Project {
    constructor(data) {
        let tag = document.createElement("div");
        tag.className = "p-4 w-full project relative z-10 md:opacity-100 opacity-50";

        tag.innerHTML = `
            <div class="h-fit border-2 bg-[#03071E] border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div class="w-full object-cover object-center flex justify-center items-center" style="background-image:linear-gradient(to right top, ${colors[Math.floor(Math.random()*10)]},${colors[Math.floor(Math.random()*10)]}); padding:2.5rem 1rem;">
                    <h1 class="title-font text-2xl text-center font-bold text-gray-200 drop-shadow-lg mb-3 uppercase">${data.name}</h1>
                </div>
                <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">${data.language ?? "Other"}</h2>
                    <p class="leading-relaxed mb-3">${data.description ?? ""}</p>
                    <div class="flex items-center flex-wrap">
                        <a href="${data.html_url}" target="_blank" class="text-[#F48C06] inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>${data.watchers_count}
                        </span>
                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z"/>
                        </svg>${data.stargazers_count}
                        </span>
                    </div>
                </div>
            </div>
        `;

        this.tag = tag;
    }
}

let projects = document.getElementById("projects");

if(page === "projects") {
    fetch("https://api.github.com/users/tejasnayak25/repos?per_page=100&page=1").then(res=>res.json()).then(res=>{
        if(res && res.length > 0) {
            projects.innerHTML = "";

            hideCurrentPage();
            render("projects");
    
            res.forEach(element => {
                if(element.topics.includes("project")) {
                    let proj = new Project(element);
                    projects.append(proj.tag);
                }
            });

            projects.scrollTop = 100;

            anime({
                targets: '#projects',
                scrollTop:0,
                opacity: 1,
                duration: 1000,
                easing: 'easeInOutExpo'
            });

            const
            // parent = document.querySelector('.outerHeight'),
            els = document.querySelectorAll('.project'),
            tl = anime.timeline({ autoplay: false })
        
            if(isMobile) {
                // Use IntersectionObserver + CSS transitions to reduce scroll jank
                const observerOptions = {
                    root: projects,
                    rootMargin: '0px',
                    threshold: [0, 0.5, 0.9, 1]
                };

                // Ensure minimal style changes: add a class that will be handled by CSS for smooth transitions
                els.forEach(el => {
                    el.classList.add('project-observer');
                });

                const io = new IntersectionObserver((entries) => {
                    // Batch DOM writes inside rAF
                    window.requestAnimationFrame(() => {
                        entries.forEach(entry => {
                            const el = entry.target;
                            if (entry.intersectionRatio >= 0.9) {
                                el.classList.add('in-viewport');
                                el.style.zIndex = 30;
                                el.style.opacity = '1';
                            } else if (entry.intersectionRatio >= 0.5) {
                                // partially visible
                                el.classList.add('in-viewport');
                                el.style.zIndex = 20;
                                el.style.opacity = '0.75';
                            } else {
                                el.classList.remove('in-viewport');
                                el.style.zIndex = 10;
                                el.style.opacity = '0.5';
                            }
                        });
                    });
                }, observerOptions);

                els.forEach(el => io.observe(el));

                // Keep tl sync with scroll percent but throttle rAF to avoid heavy anime calls
                let ticking = false;
                projects.addEventListener('scroll', () => {
                    if (!ticking) {
                        window.requestAnimationFrame(() => {
                            const percentage = getScrollPercent();
                            tl.seek(tl.duration * (percentage * 0.01));
                            ticking = false;
                        });
                        ticking = true;
                    }
                });
            }
            
        }
    });
}


function getScrollPercent() {
    var h = projects, 
        b = projects,
        st = 'scrollTop',
        sh = 'scrollHeight'
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100
}
