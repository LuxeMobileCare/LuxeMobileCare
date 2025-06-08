// FINAL SCRIPT.JS - Clean Version
(function ($) {
    "use strict";

    // Change navbar background on scroll
    var initScrollNav = function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            $('.navbar.fixed-top').addClass("bg-black");
        } else {
            $('.navbar.fixed-top').removeClass("bg-black");
        }
    };

    $(window).scroll(function() {
        initScrollNav();
    });

    $(document).ready(function () {
        // Animate on Scroll
        AOS.init({
            duration: 1000,
            once: true,
        });
    });

})(jQuery);
