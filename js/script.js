$(document).ready(function() {
    /* sticky navigation */
    $('.js--sticky__header').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky_header');
        } else {
            $('nav').removeClass('sticky_header');
        }
    }, {
        offset: '10px;'
    });

    // ---------- MENU TOGGLE ---------------

    $('#canvas_open').on('click', (function(e) {

        e.preventDefault();

        var display = $("#offcanvas_menu").css('display');

        if (display == "none") {
            $("#offcanvas_menu").css('display', 'block');
            $("#canvas_open").css('display', 'block');

        } else {
            $("#offcanvas_menu").css('display', 'none');
            $("#canvas_open").css('display', 'block');


        }

    }));

    $('#canvas_close').on('click', (function(e) {

        e.preventDefault();

        var display = $("#offcanvas_menu").css('display');

        if (display == "block") {
            $("#offcanvas_menu").css('display', 'none')
        }

    }));



    // ---------- CART TOGGLE ------------------


    $('#cart-btn,body').on('click', (function(ev) {

        ev.stopPropagation()

        if (ev.target.id == "cart-icon") {
            if ($('#mini_cart').is(':visible')) {
                $('#mini_cart').fadeOut();
            } else {
                $('#mini_cart').fadeIn();
            }
        } else {
            $('#mini_cart').fadeOut();
        }


    }));

    $('#cart-btn_res').on('click', (function(e) {

        e.preventDefault();

        var display = $("#mini_cart_res").css('display');
        console.log(display);
        if (display == "block") {
            $("#mini_cart_res").css('display', 'none')
        } else {
            $("#mini_cart_res").css('display', 'block')

        }

    }));

    // ---------- RESPONSIVE HEADER NAV -------------
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }
    // ---------------- SLIDERS --------------
    $('.owl-featured').owlCarousel({
        loop: true,
        margin: 10,
        rtl: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: true
            },
            600: {
                items: 2,
                nav: true,
                loop: true
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            }
        }
    })


    // ---------------------------
    $('.owl-offer').owlCarousel({
            loop: true,
            margin: 10,
            rtl: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: true,
                    loop: true
                },
                600: {
                    items: 2,
                    nav: true,
                    loop: true
                },
                1000: {
                    items: 4,
                    nav: true,
                    loop: true
                }
            }
        })
        // -------------------------------------

    $('.owl-detail').owlCarousel({
        loop: true,
        margin: 10,
        rtl: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
                nav: true,
                loop: true,
                dotsEach: true
            },
            600: {
                items: 3,
                nav: true,
                loop: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: true
            }
        }
    })
});