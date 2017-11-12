var hamburger = document.querySelector(".hamburger");
console.log(hamburger);
hamburger.addEventListener("click", function () {
    if (hamburger.classList.contains("hamburger_active")) {
        hamburger.classList.remove("hamburger_active");

    } else {
        hamburger.classList.add("hamburger_active");
    }

});

var navigation = document.querySelector(".navigation-list");
console.log(navigation);
hamburger.addEventListener("click", function () {
    if (hamburger.classList.contains("navigation-list_active")) {
        hamburger.classList.remove("navigation-list_active");

    } else {
        hamburger.classList.add("navigation-list_active");
    }

});