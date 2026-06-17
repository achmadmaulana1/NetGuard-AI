(function () {
    function initIcons() {
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    function initTheme() {
        const savedTheme = localStorage.getItem("netguard-theme") || "dark";
        document.documentElement.dataset.theme = savedTheme;

        document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
            button.addEventListener("click", () => {
                const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
                document.documentElement.dataset.theme = nextTheme;
                localStorage.setItem("netguard-theme", nextTheme);
            });
        });
    }

    function initPageTransitions() {
        document.querySelectorAll("[data-transition-link]").forEach((link) => {
            link.addEventListener("click", (event) => {
                const href = link.getAttribute("href");
                if (!href || href.startsWith("#") || link.target === "_blank") {
                    return;
                }
                event.preventDefault();
                document.body.classList.add("is-transitioning");
                window.setTimeout(() => {
                    window.location.href = href;
                }, 260);
            });
        });
    }

    function initProcessForms() {
        document.querySelectorAll("[data-process-form]").forEach((form) => {
            form.addEventListener("submit", () => {
                const button = form.querySelector("button[type='submit']:focus") || form.querySelector("button[type='submit']");
                if (button) {
                    button.classList.add("is-processing");
                    button.setAttribute("aria-busy", "true");
                }
            });
        });
    }

    initTheme();
    initPageTransitions();
    initProcessForms();
    initIcons();
})();
