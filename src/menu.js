(function() { 

const trigger = document.querySelector(".js-navbar-trigger");
const submenu = document.querySelector(".submenu");

trigger.addEventListener("click", () => {
    console.log("u gotcha me");
    submenu.classList.toggle("active");
});

(function() { 
const burger = document.querySelector(".burger");
const menu = document.querySelector(".navbar__list");

burger.addEventListener("click", () => {
    console.log("u gotcha me");
    menu.classList.toggle("active");
});

})();


    })();

