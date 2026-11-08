// ========================================
// Main: navigation, theme and scroll effects
// ========================================

(function () {
    "use strict";

    const root = document.documentElement;
    const navbar = document.getElementById("navbar");
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    const themeToggle = document.getElementById("themeToggle");

    // ---------- Footer year ----------
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ---------- Theme toggle ----------
    function currentTheme() {
        const set = root.getAttribute("data-theme");
        if (set) return set;
        return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }

    themeToggle?.addEventListener("click", () => {
        const next = currentTheme() === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem("theme", next); } catch (e) { /* storage unavailable */ }
    });

    // ---------- Mobile menu ----------
    function closeMenu() {
        navbar.classList.remove("menu-open");
        navToggle?.setAttribute("aria-expanded", "false");
        navToggle?.setAttribute("aria-label", "Open menu");
    }

    navToggle?.addEventListener("click", () => {
        const open = navbar.classList.toggle("menu-open");
        navToggle.setAttribute("aria-expanded", String(open));
        navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    navLinks?.addEventListener("click", (e) => {
        if (e.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });

    // ---------- Navbar shadow on scroll ----------
    function onScroll() {
        navbar.classList.toggle("scrolled", window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // ---------- Active nav link ----------
    const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("main section[id]");

    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const id = entry.target.id;
                links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + id));
            });
        },
        { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => sectionObserver.observe(s));

    // ---------- Reveal on scroll ----------
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealTargets = document.querySelectorAll(
        ".section-title, .about-body, .project-card, .project-row, .skill-card, .contact-lead"
    );

    if (reduceMotion || !("IntersectionObserver" in window)) {
        revealTargets.forEach((el) => el.classList.add("is-visible"));
    } else {
        const revealObserver = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );
        revealTargets.forEach((el) => {
            el.classList.add("reveal");
            revealObserver.observe(el);
        });
    }
})();
