function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

include('js/jquery.custom-file-input.js');

var controls = [
    '<div class="plyr__controls">', 
    '</div>',
    '<button type="button" class="plyr__control plyr__control--overlaid" data-plyr="play" aria-label="Play">' +
        '<img src="img/youtube-btn.png">'+
        '<span class="plyr__sr-only">Play</span>' +
    '</button>'
].join("");

const player = Plyr.setup('.player-js', {
    controls: controls,
    clickToPlay: false

});

(function(e,t,n){var r=e.querySelectorAll("html")[0];r.className=r.className.replace(/(^|\s)no-js(\s|$)/,"$1js$2")})(document,window,0);

$(function () {
    $("[type='tel']").mask('+9 (999) 999-99-99');
});


let label_1 = null;
let labelVal_1 = null;
let inputFile_1 = null;

let label_2 = null;
let labelVal_2 = null;
let inputFile_2 = null;

let btnClear = ".btn-file-reset";

( function ( document, window, index)
{
    var inputs = document.querySelectorAll( '.inputfile-1' );
    Array.prototype.forEach.call( inputs, function( input )
    {
        label_1	 = input.nextElementSibling;
        labelVal_1 = label_1.innerHTML;
        inputFile_1 = input;

        input.addEventListener( 'change', function( e )
        {
            var fileName = '';

            if( fileName ){
                label_1.querySelector( 'span' ).innerHTML = fileName;
            }
            else {
                label_1.innerHTML = labelVal_1;
                $(".file-1 " + btnClear).css('display', 'inherit');
            }
        });

        input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
        input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
    });


    inputs = document.querySelectorAll( '.inputfile-2' );
    Array.prototype.forEach.call( inputs, function( input )
    {
        label_2	 = input.nextElementSibling;
        labelVal_2 = label_2.innerHTML;
        inputFile_2 = input;

        input.addEventListener( 'change', function( e )
        {
            var fileName = '';

            if( fileName ){
                label_2.querySelector( 'span' ).innerHTML = fileName;
            }
            else {
                label_2.innerHTML = labelVal;
                $(".file-2 " + btnClear).css('display', 'inherit');
            }
        });

        input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
        input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
    });
}( document, window, 0 ));


function resetBtnFormFile(value){
    if (value.parentElement.className === 'file-1'){
        if (label_1.querySelector("#"+value.id)){
            $("."+value.parentElement.className+ " "+ btnClear).remove();
            $(inputFile_1).val('');
            label_1.innerHTML = labelVal_1;
        }
    }
    if (value.parentElement.className === 'file-2'){
        if (label_2.querySelector("#"+value.id)){
            $("."+value.parentElement.className+ " "+ btnClear).remove();
            $(inputFile_2).val('');
            label_2.innerHTML = labelVal_2;
        }
    }
}

/* Services Slider */

$('#services-blocks').slick({
    infinite: false,
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('#section-services #arrows-services .arrow-left a').click(function () {
    $('#services-blocks').slick('slickPrev');
});

$('#section-services #arrows-services .arrow-right a').click(function () {
    $('#services-blocks').slick('slickNext');
});

/* Services Slider */

/* Contextual Slider */

$('#contextual-body').slick({
    infinite: false,
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('#contextual #arrows-contextual .arrow-left a').click(function () {
    $('#contextual-body').slick('slickPrev');
});

$('#contextual #arrows-contextual .arrow-right a').click(function () {
    $('#contextual-body').slick('slickNext');
});

/* Contextual Slider */

/* Contextual Slider */

$('#contextual-body-dots').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '#contextual-body-with-dots',
    arrows: false,
    dots: false,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                infinite: false,
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});

$('#contextual-body-with-dots').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    asNavFor: '#contextual-body-dots',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('#contextual.slider-with-dots #arrows-contextual .arrow-left a').click(function () {
    $('#contextual-body-with-dots').slick('slickPrev');
});

$('#contextual.slider-with-dots #arrows-contextual .arrow-right a').click(function () {
    $('#contextual-body-with-dots').slick('slickNext');
});

/* Contextual Slider */



/* Tariff Slider */

$('#tariff-body').slick({
    infinite: false,
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('#tariffs #arrows-tariffs .arrow-left a').click(function () {
    $('#tariff-body').slick('slickPrev');
});

$('#tariffs #arrows-tariffs .arrow-right a').click(function () {
    $('#tariff-body').slick('slickNext');
});

/* Tariff Slider */

/* Cases Slider */

$('#cases-body').slick({
    infinite: false,
    lazyLoad: 'ondemand',
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('#section-cases #arrows-cases .arrow-left a').click(function () {
    $('#cases-body').slick('slickPrev');
});

$('#section-cases #arrows-cases .arrow-right a').click(function () {
    $('#cases-body').slick('slickNext');
});

/* Cases Slider */


/* Reviews Slider */

$('#reviews-body').slick({
    infinite: false,
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('#section-reviews #arrows-reviews .arrow-left a').click(function () {
    $('#reviews-body').slick('slickPrev');
});

$('#section-reviews #arrows-reviews .arrow-right a').click(function () {
    $('#reviews-body').slick('slickNext');
});

/* Reviews Slider */

/* Article Slider */

$('#article-body').slick({
    infinite: false,
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('#section-articles #arrows-article .arrow-left a').click(function () {
    $('#article-body').slick('slickPrev');
});

$('#section-articles #arrows-article .arrow-right a').click(function () {
    $('#article-body').slick('slickNext');
});

/* Article Slider */

/* Recommended Slider */

$('#recommended-body').slick({
    infinite: false,
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    dots: false,
    rows: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('#recommended #arrows-recommended .arrow-left a').click(function () {
    $('#recommended-body').slick('slickPrev');
});

$('#recommended #arrows-recommended .arrow-right a').click(function () {
    $('#recommended-body').slick('slickNext');
});

/* Recommended Slider */

/* Video Slider */

$('#video-body').slick({
    infinite: false,
    lazyLoad: 'ondemand',
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('#video-reviews #arrows-video .arrow-left a').click(function () {
    $('#video-body').slick('slickPrev');
});

$('#video-reviews #arrows-video .arrow-right a').click(function () {
    $('#video-body').slick('slickNext');
});

/* Video Slider */


/* Shares Slider */

$('#shares-body').slick({
    infinite: false,
    lazyLoad: 'ondemand',
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    // autoplay: true,
    rows: 3,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('#shares #arrows-shares .arrow-left a').click(function () {
    $('#shares-body').slick('slickPrev');
});

$('#shares #arrows-shares .arrow-right a').click(function () {
    $('#shares-body').slick('slickNext');
});

/* Shares Slider */


/* Cases PageBlock Slider */

$('#cases-page-body').slick({
    infinite: false,
    lazyLoad: 'ondemand',
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    // autoplay: true,
    rows: 4,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('#cases-page #cases-page-head #arrows-cases .arrow-left a').click(function () {
    $('#cases-page-body').slick('slickPrev');
});

$('#cases-page #cases-page-head #arrows-cases .arrow-right a').click(function () {
    $('#cases-page-body').slick('slickNext');
});

/* Cases PageBlock Slider */


$('.ads .counter-js').countTo();

$(function (){
    $("#site-upper").hide();

    $(window).scroll(function (){
        if ($(this).scrollTop() > 500){
            $("#site-upper").fadeIn();
        } else{
            $("#site-upper").fadeOut();
        }
    });

    $("#site-upper").click(function (){
        $("body,html").animate({
            scrollTop:0
        }, 0);
        return false;
    });
});

$( document ).ready(function() {

    setTimeout(function(){
        let blue_waves_up = $("#plate-blue-up");
        let blue_waves_down = $("#plate-blue-down");
        let blue_waves_down_with_plate = $("#plate-blue-down-with-plate");

        let blue_bubble_up = $("#bubble-blue-up");
        let blue_bubble_down = $("#bubble-blue-down");

        let orange_bubble_up = $("#bubble-orange-up");
        let orange_bubble_down = $("#bubble-orange-down");

        let header_block = $('header');
        let contact_form_block = $('#contact-form');
        let contact_form_bottom_block = $('#contact-form-bottom');
        let contextual_block = $('#contextual');
        let tariffs_block = $('#tariffs');
        let section_text_block = $('#section-text');


        let orange_waves_up = $('#orange-up');
        let orange_waves_down = $('#orange-down');
        let orange_waves_down_text_right = $('#orange-down-text-right');
        let orange_waves_down_text_left = $('#orange-down-text-left');
        let orange_waves_down_with_plate = $('#orange-down-with-plate');



        /* HEADER */
        var headerHeight = (header_block.height() - orange_waves_down_text_right.height()-6);

        $("head style#header_style").html(
            "header::after{height:"+parseInt(orange_waves_down_text_right.height())+"px;}"+
            "header{margin-bottom:"+(orange_waves_down_text_right.height())+"px}"
        );
        /* HEADER */

        /*CONTEXTUAL*/

        $('head style#contextual_style').html(
            "#contextual{padding-bottom:"+(blue_waves_up.height())+"px}"+
            "#contextual::before{height:"+blue_waves_up.height()+"px;top:-"+parseInt(blue_waves_up.height())+"px;}"+

            "#contextual .bubble-background-top{height:"+blue_bubble_up.height()+"px; width:"+blue_bubble_up.width()+"px}"+
            "#contextual .bubble-background-down{height:"+blue_bubble_down.height()+"px; width:"+blue_bubble_down.width()+"px}"

        );

        /*CONTEXTUAL*/


        /*CONTACT FORM*/

        var form = contact_form_block.find('form');

        var height_bottom_waves = parseInt((orange_waves_down_text_left.height()) - 1) - (form.height() / 2);
        if (height_bottom_waves < 100){ height_bottom_waves = orange_waves_down_text_left.height() / 2; }

        $('head style#contact_form_style').html(
            "#contact-form{margin-top: "+orange_waves_up.height()+"px;}"+
            "#contact-form::before{height:"+orange_waves_up.height()+"px;top:-"+parseInt(orange_waves_up.height())+"px;}"+
            "#contact-form::after{height:"+(orange_waves_down_text_left.height())+"px;bottom:-"+(height_bottom_waves)+"px;}"+
            "#contact-form{top:-"+orange_waves_up.height()+"px}"
        );

        /*CONTACT FORM*/

        /*TARIFFS*/

        $('head style#tariffs_style').html(
            "#tariffs{margin-top: "+orange_waves_up.height()+"px; margin-bottom:"+orange_waves_down_with_plate.height()+"px;}"+
            "#tariffs::before{height:"+orange_waves_up.height()+"px;top:-"+parseInt(orange_waves_up.height())+"px;}"+
            "#tariffs::after{height:"+orange_waves_down_with_plate.height()+"px;bottom: -"+parseInt(orange_waves_down_with_plate.height())+"px;}"+

            "#tariffs .bubble-background-top{height:"+orange_bubble_up.height()+"px; width:"+orange_bubble_up.width()+"px}"+
            "#tariffs .bubble-background-down{height:"+orange_bubble_down.height()+"px; width:"+orange_bubble_down.width()+"px}"
        );

        /*TARIFFS*/

        /*SECTION TEXT*/

        $("head style#section_text_style").html(
            "#section-text{padding-top:"+blue_waves_down_with_plate.height()+"px; top:-"+blue_waves_down_with_plate.height()+"px}"+
            "#section-text::after{height:"+(blue_waves_down_with_plate.height()-1)+"px;bottom:-"+(parseInt(blue_waves_down_with_plate.height())-1)+"px;}"+

            "#section-text .bubble-background-top{height:"+blue_bubble_up.height()+"px; width:"+blue_bubble_up.width()+"px}"+
            "#section-text .bubble-background-down{height:"+blue_bubble_down.height()+"px; width:"+blue_bubble_down.width()+"px}"
        );

        /*SECTION TEXT*/

        /*CONTACT FORM BOTTOM*/


        var form_bottom = contact_form_bottom_block.find('form');

        var height_bottom_waves_form_bottom = parseInt((orange_waves_down_text_left.height()) - 1) - (form_bottom.height() / 2);
        if (height_bottom_waves_form_bottom < 100){ height_bottom_waves_form_bottom = orange_waves_down_text_left.height() / 2; }


        $('head style#contact_form_bottom_style').html(
            "#contact-form-bottom{margin-top: "+orange_waves_up.height()+"px; margin-bottom: "+height_bottom_waves_form_bottom+"px;}"+
            "#contact-form-bottom::before{height:"+orange_waves_up.height()+"px;top:-"+parseInt(orange_waves_up.height())+"px;}"+
            "#contact-form-bottom::after{height:"+(orange_waves_down_text_left.height())+"px;bottom:-"+height_bottom_waves_form_bottom+"px;}"
        );

        /*CONTACT FORM BOTTOM*/




        $(window).on('resize', function(){

            /* HEADER */
            var headerHeight = (header_block.height() - orange_waves_down_text_right.height()-6);

            $("head style#header_style").html(
                "header::after{height:"+parseInt(orange_waves_down_text_right.height())+"px;}"+
                "header{margin-bottom:"+(orange_waves_down_text_right.height())+"px}"
            );
            /* HEADER */

            /*CONTEXTUAL*/

            $('head style#contextual_style').html(
                "#contextual{padding-bottom:"+(blue_waves_up.height())+"px}"+
                "#contextual::before{height:"+blue_waves_up.height()+"px;top:-"+parseInt(blue_waves_up.height())+"px;}"+

                "#contextual .bubble-background-top{height:"+blue_bubble_up.height()+"px; width:"+blue_bubble_up.width()+"px}"+
                "#contextual .bubble-background-down{height:"+blue_bubble_down.height()+"px; width:"+blue_bubble_down.width()+"px}"

            );

            /*CONTEXTUAL*/


            /*CONTACT FORM*/

            var form = contact_form_block.find('form');

            var height_bottom_waves = parseInt((orange_waves_down_text_left.height()) - 1) - (form.height() / 2);
            if (height_bottom_waves < 100){ height_bottom_waves = orange_waves_down_text_left.height() / 2; }

            $('head style#contact_form_style').html(
                "#contact-form{margin-top: "+orange_waves_up.height()+"px;}"+
                "#contact-form::before{height:"+orange_waves_up.height()+"px;top:-"+parseInt(orange_waves_up.height())+"px;}"+
                "#contact-form::after{height:"+(orange_waves_down_text_left.height())+"px;bottom:-"+(height_bottom_waves)+"px;}"+
                "#contact-form{top:-"+orange_waves_up.height()+"px}"
            );

            /*CONTACT FORM*/

            /*TARIFFS*/

            $('head style#tariffs_style').html(
                "#tariffs{margin-top: "+orange_waves_up.height()+"px; margin-bottom:"+orange_waves_down_with_plate.height()+"px;}"+
                "#tariffs::before{height:"+orange_waves_up.height()+"px;top:-"+parseInt(orange_waves_up.height())+"px;}"+
                "#tariffs::after{height:"+orange_waves_down_with_plate.height()+"px;bottom: -"+parseInt(orange_waves_down_with_plate.height())+"px;}"+

                "#tariffs .bubble-background-top{height:"+orange_bubble_up.height()+"px; width:"+orange_bubble_up.width()+"px}"+
                "#tariffs .bubble-background-down{height:"+orange_bubble_down.height()+"px; width:"+orange_bubble_down.width()+"px}"
            );

            /*TARIFFS*/

            /*SECTION TEXT*/

            $("head style#section_text_style").html(
                "#section-text{padding-top:"+blue_waves_down_with_plate.height()+"px; top:-"+blue_waves_down_with_plate.height()+"px}"+
                "#section-text::after{height:"+blue_waves_down_with_plate.height()+"px;bottom:-"+parseInt(blue_waves_down_with_plate.height())+"px;}"+

                "#section-text .bubble-background-top{height:"+blue_bubble_up.height()+"px; width:"+blue_bubble_up.width()+"px}"+
                "#section-text .bubble-background-down{height:"+blue_bubble_down.height()+"px; width:"+blue_bubble_down.width()+"px}"
            );

            /*SECTION TEXT*/

            /*CONTACT FORM BOTTOM*/

            var form_bottom = contact_form_bottom_block.find('form');

            var height_bottom_waves_form_bottom = parseInt((orange_waves_down_text_left.height()) - 1) - (form_bottom.height() / 2);
            if (height_bottom_waves_form_bottom < 100){ height_bottom_waves_form_bottom = orange_waves_down_text_left.height() / 2; }


            $('head style#contact_form_bottom_style').html(
                "#contact-form-bottom{margin-top: "+orange_waves_up.height()+"px; margin-bottom: "+height_bottom_waves_form_bottom+"px;}"+
                "#contact-form-bottom::before{height:"+orange_waves_up.height()+"px;top:-"+parseInt(orange_waves_up.height())+"px;}"+
                "#contact-form-bottom::after{height:"+(orange_waves_down_text_left.height())+"px;bottom:-"+height_bottom_waves_form_bottom+"px;}"
            );

            /*CONTACT FORM BOTTOM*/

        });


    }, 50);

});



 $(document).ready(function() {
    $("#popup").modal('show');
  });

$('#cases-page .cases-filter li').click(function(){
    $('#cases-page .cases-filter li').each(function(){
        $(this).removeClass('current');
    });
    $(this).addClass('current');
});

$('#cases-page .category-filter li').click(function(){
    $('#cases-page .category-filter li').each(function(){
        $(this).removeClass('current');
    });
    $(this).addClass('current');
});

$('#news .category-filter li').click(function(){
    $('#news .category-filter li').each(function(){
        $(this).removeClass('current');
    });
    $(this).addClass('current');
});