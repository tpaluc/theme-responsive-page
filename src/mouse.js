(function() {

    const mouseCursor = document.querySelector(".cursor");
    const navLinks= document.querySelectorAll(".navbar__list li");

    window.addEventListener("mousemove", cursor);

    function cursor(e) {
        mouseCursor.style.top = e.pageY + "px";
        mouseCursor.style.left = e.pageX + "px";
    };

   
    navLinks.forEach(link => {
        link.addEventListener("mouseleave", () => {
            mouseCursor.classList.remove("link-grow");
        });
        link.addEventListener("mouseover", () => {
            mouseCursor.classList.add("link-grow");
        });
    });
})();




