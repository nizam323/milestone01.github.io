var skillsSection = document.querySelector('#skills');
var btn = document.querySelector('#btn');
function toggle() {
    skillsSection.classList.toggle("hide");
    if (skillsSection.classList.contains("hide")) {
        btn.innerHTML = 'Show Skills';
    }
    else {
        btn.innerHTML = 'Hide Skills';
    }
}
;
