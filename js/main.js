var hamburger = document.querySelector(".hamburger");
var navigation = document.querySelector(".navigation-list");
hamburger.addEventListener("click", function () {
    if (hamburger.classList.contains("hamburger_active")) {
        hamburger.classList.remove("hamburger_active");
        navigation.classList.remove("navigation-list_active");
    } else {
        hamburger.classList.add("hamburger_active");
        navigation.classList.add("navigation-list_active");
         }
});