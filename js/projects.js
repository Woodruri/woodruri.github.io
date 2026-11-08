// ========================================
// Projects
// To add a project, add an object to this array.
//   featured: true  -> shown as a large card
//   featured: false -> shown in the compact "More projects" list
//   category: one of the keys in projectCategories
//   status:   "Active", "In progress" or "Complete"
// ========================================

const projectCategories = {
    all: "All",
    systems: "Systems",
    graphics: "Graphics & Games",
    tools: "Tools & Networking",
};

const projectsArray = [
    // ---------- Featured ----------
    {
        title: "NES Emulator",
        year: 2026,
        status: "In progress",
        category: "systems",
        featured: true,
        description:
            "An NES emulator in Rust, built from the CPU up. An opcode table with addressing modes and cycle counts drives the CPU core. The PPU and cartridge mapping are still to come.",
        tags: ["Rust", "Emulation", "CPU Architecture"],
        githubLink: "https://github.com/Woodruri/nes_emulator",
    },
    {
        title: "Linux Virtual Device Driver",
        year: 2025,
        status: "Complete",
        category: "systems",
        featured: true,
        description:
            "A loadable Linux kernel module that exposes a simulated hardware device as a character device. It models the device's control and status registers and comes with a userspace test program.",
        tags: ["C", "Linux Kernel", "Device Drivers"],
        githubLink: "https://github.com/Woodruri/Driver_C",
    },
    {
        title: "6502 CPU Emulator",
        year: 2025,
        status: "Complete",
        category: "systems",
        featured: true,
        description:
            "A reusable Rust library that emulates the MOS 6502 microprocessor, with registers, status flags and memory modeled as separate modules.",
        tags: ["Rust", "Emulation", "Library Design"],
        githubLink: "https://github.com/Woodruri/Emulator_6502",
    },
    {
        title: "PhysicsGo",
        year: 2026,
        status: "Active",
        category: "graphics",
        featured: true,
        description:
            "A real-time 3D physics sandbox in Go with raylib. It simulates gravity, wall collisions and damped bounces, and has keyboard controls and an orbiting camera.",
        tags: ["Go", "raylib", "Physics Simulation"],
        githubLink: "https://github.com/Woodruri/PhysicsGo",
    },
    {
        title: "Multithreaded Prime Sieve",
        year: 2023,
        status: "Complete",
        category: "systems",
        featured: true,
        description:
            "A configurable, multithreaded Sieve of Eratosthenes in C that splits work across threads to find every prime up to an arbitrary bound.",
        tags: ["C", "pthreads", "Concurrency"],
        githubLink: "https://github.com/Woodruri/Multi-threaded-primes-sieve",
    },
    {
        title: "Shape Net",
        year: 2024,
        status: "Complete",
        category: "tools",
        featured: true,
        description:
            "A multi-user shared drawing board that runs over a custom application-layer protocol with hand-built packet formats and a multithreaded server. Built for CS 494 (Internetworking Protocols).",
        tags: ["Python", "Networking", "Protocol Design"],
        githubLink: "https://github.com/Woodruri/shape_net",
    },

    // ---------- More projects ----------
    {
        title: "wgpu Graphics Playground",
        year: 2026,
        status: "In progress",
        category: "graphics",
        featured: false,
        description: "Learning modern GPU programming by rendering a sphere with wgpu and winit.",
        tags: ["Rust", "wgpu", "GPU"],
        githubLink: "https://github.com/Woodruri/graphics_learning",
    },
    {
        title: "Mini Mages",
        year: 2026,
        status: "In progress",
        category: "graphics",
        featured: false,
        description: "A game prototype built in the Godot engine.",
        tags: ["Godot", "GDScript"],
        githubLink: "https://github.com/Woodruri/mini-mages",
    },
    {
        title: "Animal Shucks",
        year: 2025,
        status: "In progress",
        category: "graphics",
        featured: false,
        description: "A tile-map game in Rust on the Bevy ECS engine, with player movement and a follow camera.",
        tags: ["Rust", "Bevy", "ECS"],
        githubLink: "https://github.com/Woodruri/animal_shucks",
    },
    {
        title: "Language Learning App",
        year: 2026,
        status: "Complete",
        category: "tools",
        featured: false,
        description: "A Tkinter desktop app that turns uploaded text into vocabulary definitions and practice quizzes through an API.",
        tags: ["Python", "Tkinter", "REST APIs"],
        githubLink: "https://github.com/Woodruri/Language_API",
    },
    {
        title: "Oregon Law Scraper",
        year: 2025,
        status: "In progress",
        category: "tools",
        featured: false,
        description: "A scraper that collects Oregon court publications, statutes and administrative rules.",
        tags: ["Python", "Web Scraping"],
        githubLink: "https://github.com/Woodruri/lawyer_boy",
    },
    {
        title: "Weather Station Querying Tool",
        year: 2024,
        status: "Complete",
        category: "tools",
        featured: false,
        description: "Scrapes daily weather station data and plots trends over time.",
        tags: ["Python", "Data Visualization"],
        githubLink: "https://github.com/Woodruri/Daily_weather_project",
    },
    {
        title: "Up or Down",
        year: 2024,
        status: "Complete",
        category: "systems",
        featured: false,
        description: "A small C program that detects whether the system's call stack grows up or down.",
        tags: ["C", "Memory Layout"],
        githubLink: "https://github.com/Woodruri/up_or_down",
    },
    {
        title: "Tone Synthesizer",
        year: 2023,
        status: "Complete",
        category: "graphics",
        featured: false,
        description: "A command-line synthesizer that mixes user-chosen frequencies into real-time audio through an SDL2 callback.",
        tags: ["C++", "SDL2", "Audio DSP"],
        githubLink: "https://github.com/Woodruri/Synthesizer",
    },
    {
        title: "psuShell",
        year: 2023,
        status: "Complete",
        category: "systems",
        featured: false,
        description: "A Unix shell written in C for coursework, with pipeline parsing, built-ins (cd, pwd, echo, history) and fork/exec process control.",
        tags: ["C", "POSIX", "Processes"],
        githubLink: "https://github.com/Woodruri/psuShell",
    },
];

// ---------- Rendering ----------

function statusClass(status) {
    return "status-" + status.toLowerCase().replace(/\s+/g, "-");
}

function createProjectCard(p) {
    return `
    <article class="project-card" data-category="${p.category}">
        <div class="project-meta mono">
            <span class="status ${statusClass(p.status)}">${p.status}</span>
            <span>${p.year}</span>
        </div>
        <h3 class="project-title">
            <a href="${p.githubLink}" target="_blank" rel="noopener noreferrer">${p.title}</a>
        </h3>
        <p class="project-desc">${p.description}</p>
        <ul class="tags">${p.tags.map((t) => `<li class="tag mono">${t}</li>`).join("")}</ul>
        <a class="project-link mono" href="${p.githubLink}" target="_blank" rel="noopener noreferrer" aria-label="${p.title} source code on GitHub">
            View source <span aria-hidden="true">→</span>
        </a>
    </article>`;
}

function createProjectRow(p) {
    return `
    <li class="project-row" data-category="${p.category}">
        <a href="${p.githubLink}" target="_blank" rel="noopener noreferrer">
            <span class="row-year mono">${p.year}</span>
            <span class="row-main">
                <span class="row-title">${p.title}</span>
                <span class="row-desc">${p.description}</span>
            </span>
            <span class="row-tags mono">${p.tags.join(" · ")}</span>
            <span class="row-arrow" aria-hidden="true">↗</span>
        </a>
    </li>`;
}

function renderProjects() {
    const featuredEl = document.getElementById("featuredProjects");
    const otherEl = document.getElementById("otherProjects");
    const filtersEl = document.getElementById("projectFilters");
    if (!featuredEl || !otherEl) return;

    const byYear = (a, b) => b.year - a.year;
    featuredEl.innerHTML = projectsArray.filter((p) => p.featured).map(createProjectCard).join("");
    otherEl.innerHTML = projectsArray.filter((p) => !p.featured).sort(byYear).map(createProjectRow).join("");

    if (filtersEl) {
        filtersEl.innerHTML = Object.entries(projectCategories)
            .map(([key, label]) =>
                `<button type="button" class="filter mono" data-filter="${key}" aria-pressed="${key === "all"}">${label}</button>`)
            .join("");
        filtersEl.addEventListener("click", (e) => {
            const btn = e.target.closest(".filter");
            if (btn) applyFilter(btn.dataset.filter);
        });
    }
}

function applyFilter(filter) {
    document.querySelectorAll("#projectFilters .filter").forEach((b) =>
        b.setAttribute("aria-pressed", String(b.dataset.filter === filter)));

    let visible = 0;
    document.querySelectorAll(".project-card, .project-row").forEach((el) => {
        const show = filter === "all" || el.dataset.category === filter;
        el.hidden = !show;
        if (show) visible++;
    });

    const otherVisible = document.querySelectorAll(".project-row:not([hidden])").length;
    const subhead = document.querySelector(".subhead");
    if (subhead) subhead.hidden = otherVisible === 0;
    const empty = document.getElementById("emptyNote");
    if (empty) empty.hidden = visible !== 0;
}

renderProjects();
