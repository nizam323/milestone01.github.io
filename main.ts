const skillsSection = document.querySelector('#skills') as HTMLElement;
const btn = document.querySelector('#btn') as HTMLButtonElement;

function toggle() {
    skillsSection.classList.toggle("hide")
    if (skillsSection.classList.contains("hide")) {
        btn.innerHTML = 'Show Skills'
    } else {
        btn.innerHTML = 'Hide Skills'
    }
};
