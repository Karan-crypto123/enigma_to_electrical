// =====================================================
// £NIGMA TO €LECTRICAL
// HOMEPAGE FUNCTIONALITY
// =====================================================


// =========================
// EXPLORE SUBJECTS
// =========================

const exploreBtn = document.getElementById("exploreBtn");
const subjectsSection = document.getElementById("subjects");

if (exploreBtn && subjectsSection) {

    exploreBtn.addEventListener("click", () => {

        subjectsSection.scrollIntoView({
            behavior: "smooth"
        });

    });

}


// =========================
// SEARCH SUBJECTS
// =========================

const searchInput = document.getElementById("searchInput");
const subjectCards = document.querySelectorAll(".subject-card");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const query = this.value
            .toLowerCase()
            .trim();

        let visibleCards = 0;

        subjectCards.forEach(card => {

            const searchableText =
                (
                    card.innerText +
                    " " +
                    (card.dataset.search || "")
                ).toLowerCase();

            if (
                query === "" ||
                searchableText.includes(query)
            ) {

                card.style.display = "";

                visibleCards++;

            } else {

                card.style.display = "none";

            }

        });

        updateSearchMessage(visibleCards, query);

    });

}


// =========================
// SEARCH MESSAGE
// =========================

function updateSearchMessage(count, query) {

    const subjects = document.getElementById("subjects");

    if (!subjects) return;

    let message =
        document.getElementById("searchMessage");

    if (!message) {

        message = document.createElement("div");

        message.id = "searchMessage";

        subjects.appendChild(message);

    }

    if (query && count === 0) {

        message.textContent =
            `No subjects found for "${query}"`;

        message.classList.add("show");

    } else {

        message.textContent = "";

        message.classList.remove("show");

    }

}

// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");

if (menuBtn) {

    menuBtn.addEventListener("click", function () {

        let menu = document.getElementById("mobileMenu");

        // Close if already open
        if (menu) {
            menu.remove();
            return;
        }

        menu = document.createElement("div");
        menu.id = "mobileMenu";

        menu.innerHTML = `
            <div class="mobile-menu-inner">

                <div class="mobile-menu-title">
                    ⚡ £nigma to €lectrical
                </div>

                <div class="mobile-menu-subtitle">
                    Your Electrical Engineering Hub
                </div>

                <a href="#profile">
                    👤 <span>Profile</span>
                </a>

                <a href="#top">
                    🏠 <span>Home</span>
                </a>

                <a href="#subjects">
                    📚 <span>Subjects</span>
                </a>

                <a href="#study-tools">
    📖 <span>Syllabus</span>
</a>

                <div class="mobile-menu-divider"></div>

                <a href="about.html">
                    ℹ️ <span>About £nigma</span>
                </a>

                <a href="founder.html">👤 
                <span>Founder</span>
                </a>

                <a href="#feedback">
                    💬 <span>Feedback</span>
                </a>

                <a href="#settings">
                    ⚙️ <span>Settings</span>
                </a>

                <button id="closeMenu">
                    Close Menu
                </button>

            </div>
        `;

        document.body.appendChild(menu);

        const closeMenu =
            document.getElementById("closeMenu");

        if (closeMenu) {
            closeMenu.addEventListener("click", () => {
                menu.remove();
            });
        }

        menu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                menu.remove();
            });
        });

    });
}




// =========================
// VOICE SEARCH
// =========================

const micBtn =
    document.getElementById("micBtn");

const voiceStatus =
    document.getElementById("voiceStatus");

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

if (
    SpeechRecognition &&
    micBtn &&
    searchInput
) {

    const recognition =
        new SpeechRecognition();

    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;


    micBtn.addEventListener("click", () => {

        try {

            recognition.start();

            micBtn.classList.add("listening");

            if (voiceStatus) {

                voiceStatus.textContent =
                    "Listening... Speak now 🎙️";

            }

        } catch (error) {

            console.log(error);

        }

    });


    recognition.onresult = event => {

        const text =
            event.results[0][0].transcript;

        searchInput.value = text;

        searchInput.dispatchEvent(
            new Event("input", {
                bubbles: true
            })
        );

        if (voiceStatus) {

            voiceStatus.textContent =
                "Search: " + text;

        }

    };


    recognition.onend = () => {

        micBtn.classList.remove("listening");

    };


    recognition.onerror = () => {

        micBtn.classList.remove("listening");

        if (voiceStatus) {

            voiceStatus.textContent =
                "Voice search unavailable.";

        }

    };

} else if (micBtn) {

    micBtn.disabled = true;

}
// =====================================================
// BACK TO TOP
// =====================================================

const backToTop =
    document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================

const revealElements = document.querySelectorAll(
    ".subject-card, .syllabus-card"
);

if (revealElements.length) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("reveal");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

}
// =========================
// SEARCH MESSAGE
// =========================

function updateSearchMessage(count, query) {

    const subjects =
        document.getElementById("subjects");

    if (!subjects) return;

    let message =
        document.getElementById("searchMessage");

    if (!message) {

        message = document.createElement("div");

        message.id = "searchMessage";

        subjects.appendChild(message);

    }

    if (query && count === 0) {

        message.textContent =
            `No subjects found for "${query}"`;

        message.classList.add("show");

    } else {

        message.textContent = "";

        message.classList.remove("show");

    }

}