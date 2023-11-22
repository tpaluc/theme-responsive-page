const header = document.querySelector('.heading__primary--template');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    header.style.margin-left = value * -1.5 + 'px';
})