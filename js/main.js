//first_page_menu
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
 
$(".wrapper").onepage_scroll({
    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function (index) { },  // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function (index) { },   // This option accepts a callback function. The function will be called after the page moves.
    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true,                  // You can activate the keyboard controls
    responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
    // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,

            items: 1,
    navText: ["",""],
    dots: false,

})

$(function() {
        $("[data-fancybox]").fancybox({
        // Options will go here
    });
})

// accordion
$(document).ready(function () {
    $(".menu-accord__link").on("click", function () {
        var $this = $(this);
        var items = $(".menu-accord__description");
        items.removeClass("menu-accord__description_active");
        $this.siblings(".menu-accord__description").toggleClass("menu-accord__description_active");
    })
});


$(document).ready(function () {
    $(".team-accord__link").on("click", function () {
        var $this = $(this);
        var item = $this.closest('.team-accord__item');
        var items = $(".team-accord__item");
        var descs = $(".team-accord__description");
        if (item.hasClass('team-accord__item_active')) {
            item.removeClass("team-accord__item_active");
            $this.siblings(".team-accord__description").removeClass("team-accord__description_active");
        } else {
            items.removeClass("team-accord__item_active");
            descs.removeClass("team-accord__description_active");
            $this.siblings(".team-accord__description").addClass("team-accord__description_active");
            $this.parent(".team-accord__item").addClass("team-accord__item_active");
        }
    })
});