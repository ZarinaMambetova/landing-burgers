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

// accordion menu
$(document).ready(function () {
    $(".menu-accord__link").on("click", function () {
        var $this = $(this);
        var item = $(this).closest('.menu-accord__item');
        var desc = $this.siblings(".menu-accord__description");
        var items = $('.menu-accord__item');
        var descs = $(".menu-accord__description");
        if (item.hasClass('menu-accord__item_active')) {
            item.removeClass('menu-accord__item_active')
            desc.removeClass("menu-accord__description_active");
        } else {
            items.removeClass('menu-accord__item_active')
            item.addClass('menu-accord__item_active')
            descs.removeClass("menu-accord__description_active");
            desc.addClass("menu-accord__description_active");
        }
    })
});

// accordion team
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

// map


 ymaps.ready(init);

var myMap;

function init() {
    myMap = new ymaps.Map("map", {
        center: [55.73882420, 37.62639277],
        zoom: 16
    });
    myMap.behaviors.disable('scrollZoom');
    myPlacemark = new ymaps.Placemark([55.73849213, 37.63004046], {
        hintContent: 'Москва!',
        balloonContent: 'Пункт выдачи заказов'
    }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './../images/icon/map-marker.svg',
            // Размеры метки.
            iconImageSize: [47, 57],
   
    });
    myMap.geoObjects.add(myPlacemark);

    myMap.behaviors.disable('scrollZoom');
    myPlacemark = new ymaps.Placemark([55.73950901, 37.62280922], {
        hintContent: 'Москва!',
        balloonContent: 'Пункт выдачи заказов'
    }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './../images/icon/map-marker.svg',
            // Размеры метки.
            iconImageSize: [47, 57],
  
    
    });
    myMap.geoObjects.add(myPlacemark);
    
    myMap.behaviors.disable('scrollZoom');
    myPlacemark = new ymaps.Placemark([55.73673674, 37.62615662], {
        hintContent: 'Москва!',
        balloonContent: 'Пункт выдачи заказов'
    }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './../images/icon/map-marker.svg',
            // Размеры метки.
            iconImageSize: [47, 57],
  
    });

    myMap.geoObjects.add(myPlacemark);
} 

// form 

$("form").submit(function (event) {
    var data=$(this).serializeArray();
    event.preventDefault();

    $.ajax({
        type: "POST",
        url: "form.php",
        // передача в качестве объекта
        // поля будут закодированые через encodeURIComponent автоматически
        data: data,
        success: function (msg) {
            var messege = JSON.parse(msg);
                  if (massege.status=="folse") {
                alert(messege.text)
            }
            else {
                alert ()
            }
        }
    });
});

