/* -------------------------------------------------------------------
 * Template Name         : Fotor - Personal Portfolio
 * Theme Author Name     : Yucel Yilmaz
 * Created Date          : 01 March 2020
 * Version               : 1.0
------------------------------------------------------------------- */

/*------------------------------------------------------------------
[Table of contents]
* 01.Preloader
* 02.Wow Js
* 03.Navbar Menu
* 04.Resume Tab
* 05.Counter Up
* 06.ScrollIt
* 07.Magnific Popup
* 08.Isotope Gallery
* 09.Owl Carousel
* 10.Contact Form
------------------------------------------------------------------- */


$(document).ready(function() {

    "use strict";

    // Call all ready functions
    fotor_preloader(),
    fotor_wowJs(),
    fotor_navbarMenu(),
    fotor_resumeTab(),
    fotor_counterUp(),
    fotor_scrollIt(),
    fotor_magnificPopup(),
    fotor_isotopeGallery(),
    fotor_owlCarousel(),
    fotor_contactForm();

    $(document).contextmenu(function() {
        return false;
    });

    $(document).on("keydown",window,function(a){
        if(a.which == 123)
        return false;
    });

    document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
            e.keyCode === 86 || 
            e.keyCode === 85 || 
            e.keyCode === 115 || 
            e.keyCode === 19 || 
            e.keyCode === 117)) {
            alert('not allowed');
            return false;
        } else {
            return true;
        }
    };
    
});

/*  ---------------------------------------------------
    01.Preloader
    --------------------------------------------------- */

function fotor_preloader() {
    "use-strict";

    // Preloader Effect
    var loaderWrap         = $('#preloader'),
        loaderInner        = $('#loader');

    $(window).ready(function(){
        loaderInner.fadeOut(); 
        loaderWrap.delay(350).fadeOut('slow'); 
    });
}

/*  ---------------------------------------------------
    02.Wow Js
    --------------------------------------------------- */

function fotor_wowJs(){
    "use-strict";

    new WOW().init();
}

/*  ---------------------------------------------------
    03.Navbar Menu
    --------------------------------------------------- */
function fotor_navbarMenu() {
    "use-strict";

    // Variables
    let header              = $('.header'),
        logoTransparent     = $(".logo-transparent"),
        scrollTopBtn        = $(".scroll-top-btn"),
        navbarLink          = $('.menu-link'),
        logoNormal          = $(".logo-normal"),
        windowWidth         = $(window).innerWidth(),
        scrollTop           = $(window).scrollTop(),
        $dropdown           = $(".dropdown"),
        $dropdownToggle     = $(".dropdown-toggle"),
        $dropdownMenu       = $(".dropdown-menu"),
        showClass           = "show";

    // When Window On Scroll
    $(window).on('scroll',function(){
        let scrollTop       = $(this).scrollTop();

        if(scrollTop > 100 ) {
            header.addClass('header-shrink');
            scrollTopBtn.addClass('active');
            logoTransparent.hide();
            logoNormal.show();
        }else {
            header.removeClass('header-shrink');
            scrollTopBtn.removeClass('active');
            logoTransparent.show();
            logoNormal.hide();
        }
    });

    // The same process is done without page scroll to prevent errors.
    if(scrollTop > 100 ) {
        header.addClass('header-shrink');
        scrollTopBtn.addClass('active');
        logoTransparent.hide();
        logoNormal.show();
    }else {
        header.removeClass('header-shrink');
        scrollTopBtn.removeClass('active');
        logoTransparent.show();
        logoNormal.hide();
    }

    // Window On Resize Hover Dropdown
    $(window).on("resize", function() {
        let windowWidth  = $(this).innerWidth();

        if ( windowWidth > 991 ) {
            $dropdown.hover(
                function() {
                    let hasShowClass  =  $(this).hasClass(showClass);
                    if( hasShowClass!==true ){
                        $(this).addClass(showClass);
                        $(this).find($dropdownToggle).attr("aria-expanded", "true");
                        $(this).find($dropdownMenu).addClass(showClass);
                    }
                },
                function() {
                    $(this).removeClass(showClass);
                    $(this).find($dropdownToggle).attr("aria-expanded", "false");
                    $(this).find($dropdownMenu).removeClass(showClass);
                }
            );
        }else {
            $dropdown.off("mouseenter mouseleave");
            header.find('.main-menu').collapse('hide');
        }
    });
    // The same process is done without page scroll to prevent errors.
    if (windowWidth > 991 ) {
        $dropdown.hover(
            function() {
                const $this = $(this);

                var hasShowClass  = $this.hasClass(showClass);

                if(hasShowClass!==true){
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                }
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    }else {
        $dropdown.off("mouseenter mouseleave");
    }

    
    navbarLink.on('click', function(){
        $('.navbar-collapse').collapse('hide');
    }); 

    // Scroll Spy
    $('body').scrollspy({
        target: '#fixedNavbar',
        offset: 95
    });
}

/*  ---------------------------------------------------
    04.Resume Tab
    --------------------------------------------------- */
function fotor_resumeTab() {
    "use-strict";

    // Variables 
    var resumeTabItem   = $(".resume-tab-item"),
        resumeContent   = $(".resume-tab-content");

    resumeTabItem.on("click",function(){
        let tabIndex = $(this).index();
        resumeTabItem.removeClass("active");
        $(this).addClass("active");
        resumeContent.removeClass("active");
        resumeContent.eq(tabIndex).addClass("active");
    });
}

/*  ---------------------------------------------------
    05.Counter Up
    --------------------------------------------------- */
function fotor_counterUp() {
    "use-strict";

    // Variables 
    var counterItem = $('.counter');

    $('.counter').counterUp({
        delay: 15,
        time: 2000
    });
}

/*  ---------------------------------------------------
    06.ScrollIt
    --------------------------------------------------- */
function fotor_scrollIt() {
    "use-strict";

    $.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: "swing",
        scrollTime: 600,
        activeClass: "active",
        onPageChange: null,
        topOffset: -15
    });
}

/*  ---------------------------------------------------
    07.Magnific Popup
    --------------------------------------------------- */
function fotor_magnificPopup() {
    "use-strict";

    // Variables
    var portfolioGrid = $('.portfolio-grid');

    // Magnific Popup Video Iframe
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    //  Portfolio Gallery Popup */
    portfolioGrid.magnificPopup({
        delegate: '.portfolio-zoom-link',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
}

/*  ---------------------------------------------------
    08.Isotope Gallery
    --------------------------------------------------- */
function fotor_isotopeGallery() {
    "use-strict";

    // Variables 
    var portfolioFilterBtn     = $('.portfolio-filter > a'),
        portfolioBtnActive     = $('.portfolio-filter .current'),
        portfolioGalleryWrap   = $('#masonaryGallery');

    // Porfolio Filtering Click Events
    portfolioFilterBtn.on("click", function() {
        portfolioFilterBtn.removeClass('current');
        $(this).addClass('current');
    });

    // Portfolio Masonary Gallery
    portfolioGalleryWrap.imagesLoaded(function() {
        var grid = $('.gallery-masonary').isotope({
            itemSelector: '.glry-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.glry-item',
            }
        });

        // filter items on button click
        portfolioFilterBtn.on('click', function() {
            var filterValue = $(this).attr('data-gallery-filter');
            grid.isotope({
                filter: filterValue
            });
        });
    });
}

/*  ---------------------------------------------------
    09.Owl Carousel
    --------------------------------------------------- */
function fotor_owlCarousel() {
    "use-strict";

    // Variables 
    var myTeamSlider        = $('.my-team-slider'),
        testimonialsSlider  = $('.testimonials-carousel'),
        portfolioImgSlider  = $('.portfolio-img-slider'),
        blogSlider          = $('.blog-slider'),
        navArrowClass       = ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'];

    // My Team Slider
    myTeamSlider.owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:2
            },
            1000: {
                items: 3
            }
        }
    });

    // Testimonials Slider 
    testimonialsSlider.owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:1
            },
            1000: {
                items: 1
            }
        }
    });

    // Blog Slider
    blogSlider.owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Portfolio Image Slider
    portfolioImgSlider.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: navArrowClass,
        dots: false,
        stagePadding:0,
        smartSpeed:700,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
}

/*  ---------------------------------------------------
    10.Contact Form
    --------------------------------------------------- */
function fotor_contactForm() {
    "use-strict";

    $("#contactForm").on("submit",function(event) {

        // E-Mail Validation Function 
        function validateEmail(email) {
            var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regexp.test(String(email).toLowerCase());
        }

        //  Variables 
        var $this           = $(this),
            $formActionURL  = $this.attr("action"),
            name            = $("#contactName").val().trim(),
            email           = $("#contactEmail").val().trim(),
            subject         = $("#contactSubject").val().trim(),
            message         = $("#contactMessage").val().trim(),
            validateEmail   = validateEmail(email);

        // Check empty fields
        if(name===''||email===''||message===''||subject===''){
            if($('div.empty-form').css("display") == "none"){
                $('div.empty-form').stop().slideDown(500).delay(2000).slideUp(500);
            }else {
                return false;
            }
        }else if (!validateEmail===true) {
            if($('div.email-invalid').css("display") == "none"){
                $('div.email-invalid').stop().slideDown(500).delay(2000).slideUp(500);
            }else {
                return false;
            }
        }else {
            // Once the information entered is verified, the mail form is sent. 
            $this.find(':submit').append('<span class="fas fa-spinner fa-pulse ml-3"></span>');
            $("#contactForm").find(':submit').attr('disabled','true');

            $.ajax({
                url: $formActionURL,
                data: {
                    contact_name:name,
                    contact_email:email,
                    contact_subject:subject,
                    contact_message:message
                },
                type: "POST",
                success: function(response) {
                    $this.find(':submit').find("span").fadeOut();
                    $("#contactForm")[0].reset();   
                    $("#contactForm").find(':submit').removeAttr('disabled');
                    $(".success-form").html(response).slideDown(500).delay(5000).slideUp(500);  
                }
            });
        }
        event.preventDefault();
    });
}    