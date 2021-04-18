/* const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
}) */


const el = document.getElementById("navi-toggle");
console.log(el);

const navLinks = document.querySelectorAll('.navigation__item')

console.log(navLinks);


function uncheckBox() {
    el.checked = false;
}

/* uncheckBox(); */

navLinks.forEach((l) => {
    l.addEventListener('click', () => { uncheckBox() })
})