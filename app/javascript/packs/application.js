// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";
import "bootstrap";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "jquery";
import "owl.carousel";

Rails.start();
Turbolinks.start();
ActiveStorage.start();

import "controllers";

$(document).on("turbolinks:load", function () {
    $(".owl-carousel1").owlCarousel({
        margin: 10,
        responsiveClass: true,
        nav: false,
        loop: true,
        autoplay: true,
        items: 4,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
            },
        },
    });

    $(".owl-carousel2").owlCarousel({
        nav: false,
        loop: true,
        autoplay: true,
        items: 1,
        dots: true,
    });
});
