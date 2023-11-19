const tl = gsap.timeline({defaults: {duration: .75, ease: "power1.out"}})

tl.fromTo(".cookie__popup", {scale: 0}, {scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5})
tl.fromTo(".cookie", {opacity:0, x: -50, rotation: '-45deg'}, {opacity: 1, x: 0, rotation: '0deg'}, "<50%")
tl.fromTo(".cookie__text", {opacity: 0, x: 30}, {opacity: 1, x:0}, "<")

tl.fromTo('.cookie', {y:0, rotation: '0deg'}, {y:-20, rotation: '-20deg', yoyo: true, repeat: -1})
tl.fromTo('#crumbs', {y:0}, {y:-100, yoyo: true, repeat: -1},"<")

const button = document.querySelector(".btn--cookie");

button.addEventListener('click', () => {
    gsap.to('.cookie__container', {opacity: 0, y: 100, duration: 0.75, ease: "power1.out"})
})