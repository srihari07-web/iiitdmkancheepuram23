


$(function () {

    "use strict";

    var wind = $(window);


    /* ===============================  Navbar Menu  =============================== */


    $.scrollIt({
        upKey: 38,                // key code to navigate to the next section
        downKey: 40,              // key code to navigate to the previous section
        easing: 'swing',          // the easing function for animation
        scrollTime: 600,          // how long (in ms) the animation takes
        activeClass: 'active',    // class given to the active nav element
        onPageChange: null,       // function(pageIndex) that is called when page is changed
        topOffset: -80            // offste (in px) for fixed top navigation
    });


    $('.navbar .dropdown').hover(function () {
        $(this).find('.dropdown-menu').addClass('show');
    }, function () {
        $(this).find('.dropdown-menu').removeClass('show')
    });

    $('.navbar .dropdown-item').hover(function () {
        $(this).find('.dropdown-side').addClass('show');
    }, function () {
        $(this).find('.dropdown-side').removeClass('show')
    });


    wind.on("scroll", function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar.change .logo> img");

        if (bodyScroll > 300) {

            navbar.addClass("nav-scroll");
            logo.attr('src', 'assets/img/logo-dark.png');

        } else {

            navbar.removeClass("nav-scroll");
            logo.attr('src', 'assets/img/logo-light.png');
        }
    });

    $('.navbar-unav > .unav-item.dropdown .unav-link').on('click', function () {
        $(".navbar-unav").addClass("gosub");
        $(this).parent().parent().addClass("unav-active");
        $(".navbar-unav .dropdown-menu").removeClass("drop-active");
        $(this).parent().find(".dropdown-menu").addClass("drop-active");
    });

    $('.navbar-unav > .unav-item .goback').on('click', function () {
        $(".navbar-unav").removeClass("gosub");
        $(".navbar-unav .dropdown-menu").removeClass("drop-active");
        $(".navbar-unav").removeClass("unav-active");
        $(".navbar-unav .dropdown-item .slide-menu").removeClass("active");
        $(".dropdown-side").slideUp()
    });

    $('.navbar-unav .dropdown-menu .dropdown-item .slide-menu').on('click', function () {
        $(this).toggleClass("active");
        $(this).parent().find(".dropdown-side").slideToggle();
    });


    $('.nav-left-fixed .menu-bar').on('mouseenter', function () {
        $('.nav-side').addClass('show');
        $('.nav-left-fixed .overlay-nav').addClass('show');
    });

    $('.nav-left-fixed .overlay-nav').on('mouseenter', function () {
        $('.nav-side').removeClass('show');
        $(this).removeClass('show');
    });

  
    /* ===============================  Swiper slider  =============================== */


   var parallaxSlider;
var parallaxSliderOptions = {
    speed: 2000, // Adjust the speed of the slider transition as per your preference
    autoplay: {
        delay: 4000, // Adjust the delay between slides as per your preference
    },
    loop: true,
    effect: 'slide', // Set the slide effect for transitioning between images

    on: {
        init: function () {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                $(swiper.slides[i])
                    .find('.bg-img')
                    .attr({
                        'data-swiper-parallax': 0.75 * swiper.width
                    });
            }
        },
        resize: function () {
            this.update();
        }
    },

    pagination: {
        el: '.slider-prlx .parallax-slider .swiper-pagination',
        type: 'fraction',
        clickable: true
    },

    navigation: {
        nextEl: '.slider-prlx .parallax-slider .next-ctrl',
        prevEl: '.slider-prlx .parallax-slider .prev-ctrl'
    }
};

parallaxSlider = new Swiper('.slider-prlx .parallax-slider', parallaxSliderOptions);

// Stop autoplay when mouse enters the slider
parallaxSlider.el.addEventListener('mouseenter', function () {
    parallaxSlider.autoplay.stop();
});

// Start autoplay when mouse leaves the slider
parallaxSlider.el.addEventListener('mouseleave', function () {
    parallaxSlider.autoplay.start();
});



    /* ===============================  Mouse effect  =============================== */

    function mousecursor() {
        if ($("body")) {
            const e = document.querySelector(".cursor-inner"),
                t = document.querySelector(".cursor-outer");
            let n, i = 0,
                o = !1;
            window.onmousemove = function (s) {
                o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
            }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
                e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
            }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
                $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
            }),

                $("body").on("mouseenter", ".swiper-wrapper.curs-scroll", function () {
                    e.classList.add("cursor-scroll"), t.classList.add("cursor-scroll")
                }), $("body").on("mouseleave", ".swiper-wrapper.curs-scroll", function () {
                    $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-scroll"), t.classList.remove("cursor-scroll"))
                }),

                e.style.visibility = "visible", t.style.visibility = "visible"
        }
    };

    $(function () {
        mousecursor();
    });



    

    /* ===============================  Var Background image  =============================== */

    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


    var pageSectionColor = $(".bg-solid-color, section");
    pageSectionColor.each(function (indx) {

        var color = $(this).attr("data-solid-color");

        if ($(this).attr("data-solid-color")) {
            $(this).css("background-color", color);
        }
    });



    /* ===============================  sticky-bar  =============================== */


    var offset = 600;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.sticky-bar').addClass('active');
        } else {
            jQuery('.sticky-bar').removeClass('active');
        }
    });


    $('.fixed-search .search-area').on("click", ".search-icon", function () {
        $(this).toggleClass("active");
        $(".fixed-search .search-area").toggleClass("search-on");
    });



    /* ===============================  Mouse Hover  =============================== */

    $('.feat').on('mouseenter', '.items', function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');


    /* ===============================  tabs  =============================== */

    $('.tabs .tab-links').on('click', '.item-link', function () {

        var tab_id = $(this).attr('data-tab');

        $('.tabs .tab-links .item-link').removeClass('current');
        $(this).addClass('current');

        $('.tab-content').slideUp();
        $("#" + tab_id).slideDown();

    });

    $('.tabs-fade .tab-links').on('click', '.item-link', function () {

        var tab2_id = $(this).attr('data-tab');

        $('.tabs-fade .tab-links .item-link').removeClass('current');
        $(this).addClass('current');

        $('.tab-content').fadeOut();
        $("#" + tab2_id).fadeIn();

    });


    /* ===============================  skills-circle  =============================== */

    var c4 = $('.skills-circle .skill');
    var myVal = $(this).attr('data-value');

    $(".skills-circle .skill").each(function () {

        c4.circleProgress({
            startAngle: -Math.PI / 2 * 1,
            value: myVal,
            thickness: 4,
            size: 140,
            fill: { color: "#ff5e57" }
        });

    });

    wind.on('scroll', function () {
        $(".skill-progress .progres").each(function () {
            var bottom_of_object =
                $(this).offset().top + $(this).outerHeight();
            var bottom_of_window =
                $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if (bottom_of_window > bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });

    


   


    


    /* --------- YouTubePopUp --------- */

    $("a.vid").YouTubePopUp();


    /* --------- parallaxie --------- */

    $('.parallaxie').parallaxie({
        speed: 0.5,
        size: "cover"
    });


    /* --------- magnificPopup --------- */

    $('.popup-img , .gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    /* --------- justifiedGallery --------- */

    $('.justified-gallery').justifiedGallery({
        rowHeight: 400,
        lastRow: 'nojustify',
        margins: 15
    });


    /* --------- hover3d --------- */

    $(".hover3d").hover3d({
        selector: ".hover3d-child",
        invert: true
    });


    /* --------- countUp --------- */

    $('.number-sec .count').countUp({
        delay: 10,
        time: 500
    });

});


/* ===============================  Dark Mode  =============================== */

$(function () {

    function isLight() {
        return localStorage.getItem("light-mode");
    }

    function toggleRootClass() {
        document.querySelector("body:not(.business-home, .page-preview)").classList.toggle("dark");
    }

    function toggleLocalStorageItem() {
        if (isLight()) {
            localStorage.removeItem("light-mode");
        } else {
            localStorage.setItem("light-mode", "set");
        }
    }

    if (isLight()) {
        toggleRootClass();
    }

    document.querySelector(".theme-icon").addEventListener("click", () => {
        toggleLocalStorageItem();
        toggleRootClass();
    });

});


// === window When Loading === //

$(window).on("load", function () {

    /* ===============================  SPLITTING TEXT  =============================== */

    Splitting();


    /* ===============================  thumparallax  =============================== */

    var imageUp = document.getElementsByClassName('thumparallax');
    new simpleParallax(imageUp, {
        delay: 1,
        scale: 1.1
    });

    var imageDown = document.getElementsByClassName('thumparallax-down');
    new simpleParallax(imageDown, {
        orientation: 'down',
        delay: 1,
        scale: 1.1
    });


    /* ===============================  isotope Masonery  =============================== */

    $('.gallery').isotope({
        itemSelector: '.items'
    });

    $('.masonry').isotope({
        itemSelector: '.mas-item'
    });

    var $gallery = $('.gallery').isotope();

    $('.filtering').on('click', 'span', function () {
        var filterValue = $(this).attr('data-filter');
        $gallery.isotope({ filter: filterValue });
    });

    $('.filtering').on('click', 'span', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });


    /* ===============================  contact validator  =============================== */

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

});


/* ===============================  Scroll back to top  =============================== */

$(document).ready(function () {
    "use strict";

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })


});


$(window).scroll(function () {

    /* ===============================  fade slideshow  =============================== */

    var scrolled = $(this).scrollTop();
    $('.fixed-slider .caption , .fixed-slider .capt .parlx').css({
        'transform': 'translate3d(0, ' + -(scrolled * 0.20) + 'px, 0)',
        'opacity': 1 - scrolled / 600
    });

});


$(function () {


    "use strict";


    /* ===============================  fixed-slider  =============================== */

    var slidHeight = $(".fixed-slider").outerHeight();

    $(".main-content").css({
        marginTop: slidHeight
    });

});


/* ===============================  Swiper showcases with data  =============================== */


$('[data-carousel="swiper"]').each(function () {

    var containe = $(this).find('[data-swiper="container"]').attr('id');
    var pagination = $(this).find('[data-swiper="pagination"]').attr('id');
    var prev = $(this).find('[data-swiper="prev"]').attr('id');
    var next = $(this).find('[data-swiper="next"]').attr('id');
    var items = $(this).data('items');
    var autoplay = $(this).data('autoplay');
    var iSlide = $(this).data('initial');
    var loop = $(this).data('loop');
    var parallax = $(this).data('parallax');
    var space = $(this).data('space');
    var speed = $(this).data('speed');
    var center = $(this).data('center');
    var effect = $(this).data('effect');
    var direction = $(this).data('direction');
    var mousewheel = $(this).data('mousewheel');

    // Configuration
    var conf = {

    };

    // Responsive
    if ($(this).hasClass('team-carsouel')) {
        var conf = {

            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 4,
                },
            }
        };
    };

    if ($(this).hasClass('iiitdm-carsouel')) {
        var conf = {

            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }
        };
    };

    if ($(this).hasClass('work-rand-height')) {
        var conf = {

            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }
        };
    };

    if ($(this).hasClass('work-crsol-clum')) {
        var conf = {

            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 4,
                },
            }
        };
    };

    if ($(this).hasClass('testim-grid')) {
        var conf = {

            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 4,
                },
            }
        };
    };

    if ($(this).hasClass('showcase-columns-h')) {
        var conf = {

            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 4,
                },
            },

            navigation: {
                nextEl: '.showcase-columns-h .swiper-button-next',
                prevEl: '.showcase-columns-h .swiper-button-prev'
            },

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + '<svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">' +
                        '<circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"' +
                        'stroke-opacity="1" stroke-width="1px"></circle>' +
                        '<circle cx="8" cy="8" r="3" fill="#FFF"></circle>' +
                        '</svg></span>';
                },

            },
        };
    };

    if ($(this).hasClass('work-carsouel')) {
        var conf = {

            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            },

            navigation: {
                nextEl: '.works .swiper-button-next',
                prevEl: '.works .swiper-button-prev'
            }
        };
    };

    if ($(this).hasClass('anim-pagination')) {
        var conf = {

            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + '<svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">' +
                        '<circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"' +
                        'stroke-opacity="1" stroke-width="1px"></circle>' +
                        '<circle cx="8" cy="8" r="3" fill="#FFF"></circle>' +
                        '</svg></span>';
                },

            },
        };
    };

    if (items) {
        conf.slidesPerView = items
    };
    if (autoplay) {
        conf.autoplay = autoplay
    };
    if (iSlide) {
        conf.initialSlide = iSlide
    };
    if (center) {
        conf.centeredSlides = center
    };
    if (loop) {
        conf.loop = loop
    };
    if (parallax) {
        conf.parallax = parallax
    };
    if (space) {
        conf.spaceBetween = space
    };
    if (speed) {
        conf.speed = speed
    };
    if (mousewheel) {
        conf.mousewheel = mousewheel
    };
    if (effect) {
        conf.effect = effect
    };
    if (direction) {
        conf.direction = direction
    };
    if (prev) {
        conf.prevButton = '#' + prev
    };
    if (next) {
        conf.nextButton = '#' + next
    };
    if (pagination) {
        conf.pagination = '#' + pagination,
            conf.paginationClickable = true
    };

    // Initialization
    if (containe) {
        var initID = '#' + containe;
        var init = new Swiper(initID, conf);
    };
});


/* ===============================  Wow Animation  =============================== */

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();

$(function () {


    "use strict";

     // ------------ gallery-thumbs-slider -----------
     var galleryThumbs = new Swiper('.product .gallery-thumbs', {
        spaceBetween: 20,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: 'vertical',
    });
    var galleryTop = new Swiper('.product .gallery-top', {
        spaceBetween: 10,
        navigation: false,
        thumbs: {
            swiper: galleryThumbs
        }
    });


    // ------------ simillar-products-slider -----------
    var swiper = new Swiper('.simillar-products-slider .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 2000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ increase products -----------
    $(".qt-plus").click(function() {
        $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);
    });

    $(".qt-minus").click(function() {
        $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) - 1);
    });


});
 window.addEventListener('load', function () {
            document.getElementById('preloader1').classList.add('hidden');
        }
        );

        setTimeout(function () {
                document.getElementById("preloader1").classList.add("hidden");
            }, 20000);

// preloader //
//=======================================Mobile touch closer for nav ===========>
 $(document).on('click', function (e) {
                if ($(e.target).closest('.navbar-collapse').length === 0) {
                    $('.navbar-collapse').collapse('hide');
                }
            });

 
