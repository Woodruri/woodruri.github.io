// ========================================
// Experience
// Newest first. track: "engineering" or "teaching"
// ========================================

const experienceTracks = {
    all: "All",
    engineering: "Engineering",
    teaching: "Teaching & Mentoring",
};

const experienceArray = [
    {
        role: "Software Engineer (Contract)",
        org: "Sagetech Avionics",
        location: "Bingen, WA",
        start: "Jun 2026",
        end: "Oct 2026",
        track: "engineering",
        points: [
            "Designed and implemented test software for military formal qualification testing.",
            "Authored SRD and SDD documentation in Jama, tracing requirements to source code and ICDs.",
            "Prepared formal reviews of flight code, unit test suites and regression test results.",
        ],
        tags: ["Avionics", "Qualification Testing", "Requirements Traceability", "Jama"],
    },
    {
        role: "STEM Tutor",
        org: "McKay High School",
        location: "Salem, OR",
        start: "Jan 2026",
        end: "Jun 2026",
        track: "teaching",
        points: [
            "Tutored high school students across STEM subjects.",
            "Identified gaps in each student's understanding and provided targeted instruction to address them.",
        ],
        tags: ["STEM", "Tutoring"],
    },
    {
        role: "Software Engineering Intern, Data Analysis & Tooling",
        org: "ASML",
        location: "Portland, OR",
        start: "Jun 2024",
        end: "Jun 2025",
        track: "engineering",
        points: [
            "Developed a GUI tool that parses large log files and presents them with visual replay and analysis.",
            "Increased throughput for functional engineers testing new features.",
            "Collaborated on an agile team to deliver scalable, testable code.",
        ],
        tags: ["GUI Tooling", "Log Analysis", "Data Visualization", "Agile"],
    },
    {
        role: "IT Help Desk & Mentor",
        org: "PSU Computer Action Team (CAT)",
        location: "Portland, OR",
        start: "Oct 2022",
        end: "Jun 2025",
        track: "teaching",
        points: [
            "Resolved IT issues for users across all levels of technical experience.",
            "Mentored new team members in troubleshooting and in communicating clearly with users of any technical background.",
            "Wrote internal wiki documentation for solutions to common problems.",
        ],
        tags: ["IT Support", "Mentoring", "Documentation"],
    },
    {
        role: "Technical Course Support Specialist",
        org: "Portland State University",
        location: "Portland, OR",
        start: "Mar 2023",
        end: "Mar 2024",
        track: "teaching",
        points: [
            "Supported students during computer science lab sessions as they worked through course material.",
            "Assisted students with C, C++, Java, Python and the Linux command line.",
        ],
        tags: ["C", "C++", "Java", "Python", "Linux CLI"],
    },
];

// ---------- Rendering ----------

function createExperienceItem(e) {
    return `
    <li class="xp-item xp-${e.track}" data-track="${e.track}">
        <div class="xp-when mono">
            <span>${e.start} – ${e.end}</span>
            <span class="xp-loc">${e.location}</span>
        </div>
        <div class="xp-body">
            <p class="xp-track mono">${e.track === "teaching" ? "// teaching" : "// engineering"}</p>
            <h3 class="xp-role">${e.role}</h3>
            <p class="xp-org">${e.org}</p>
            <ul class="xp-points">${e.points.map((p) => `<li>${p}</li>`).join("")}</ul>
            <ul class="tags">${e.tags.map((t) => `<li class="tag mono">${t}</li>`).join("")}</ul>
        </div>
    </li>`;
}

function renderExperience() {
    const list = document.getElementById("experienceList");
    const filters = document.getElementById("experienceFilters");
    if (!list) return;

    list.innerHTML = experienceArray.map(createExperienceItem).join("");

    if (filters) {
        filters.innerHTML = Object.entries(experienceTracks)
            .map(([key, label]) =>
                `<button type="button" class="filter mono" data-filter="${key}" aria-pressed="${key === "all"}">${label}</button>`)
            .join("");
        filters.addEventListener("click", (ev) => {
            const btn = ev.target.closest(".filter");
            if (!btn) return;
            const f = btn.dataset.filter;
            filters.querySelectorAll(".filter").forEach((b) =>
                b.setAttribute("aria-pressed", String(b === btn)));
            list.querySelectorAll(".xp-item").forEach((el) => {
                el.hidden = !(f === "all" || el.dataset.track === f);
            });
        });
    }
}

renderExperience();
