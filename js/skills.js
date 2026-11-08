// ========================================
// Skills
// Edit this array to update the Skills section.
// ========================================

const skillsArray = [
    {
        title: "Languages",
        skills: ["Rust", "C", "C++", "Go", "Python", "JavaScript", "Bash"],
    },
    {
        title: "Systems & Low-Level",
        skills: ["Linux kernel modules", "CPU emulation", "RISC-V", "Multithreading", "Operating systems", "Networking protocols"],
    },
    {
        title: "Security",
        skills: ["Penetration testing", "Malware reverse engineering", "Web & cloud security", "Kali Linux"],
    },
    {
        title: "Graphics & Games",
        skills: ["wgpu", "raylib", "Bevy", "Godot", "SDL2"],
    },
    {
        title: "Web",
        skills: ["HTML", "CSS / SCSS", "JavaScript", "REST APIs"],
    },
    {
        title: "Tools & Platforms",
        skills: ["Git", "Linux (Ubuntu, Kali)", "Bare-metal servers", "Make", "Cargo"],
    },
];

function createSkillCard(group) {
    return `
        <div class="skill-card">
            <h3 class="skill-title mono">${group.title}</h3>
            <ul class="skill-chips">
                ${group.skills.map((s) => `<li>${s}</li>`).join("")}
            </ul>
        </div>`;
}

function renderSkills() {
    const grid = document.getElementById("skillsGrid");
    if (grid) grid.innerHTML = skillsArray.map(createSkillCard).join("");
}

renderSkills();
