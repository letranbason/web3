App ={
    sliderPartner: function(){

    }
};
jQuery(document).ready(function(){

});


new fullpage('#fullpage', {
    anchor: ['section-1', 'section-2', 'section-3', 'section-4','section-5','section-6','section-7','section-8','footer'],
    responsiveWidth: 1024,
    onLeave: function(anchor, direction){
        if(anchor.index == 0){
            jQuery('.header_site').removeClass('header_color');
        } else{
            jQuery('.header_site').addClass('header_color');
        }
        
    },
    autoScrolling:true,
    scrollHorizontally: true,
});

var App = {
    sliderHome: function () {
        jQuery('.banner_site').slick({
            slidesToShow: 1,
            arrows: true,
            dots: false,
            autoplaySpeed: 5000,
            pauseOnFocus: false,
            pauseOnHover: false,
            speed: 1500,
            prevArrow: jQuery('.nav_slider .nav_left'),
            nextArrow: jQuery('.nav_slider .nav_right'),
        });
        jQuery('.banner_site').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            jQuery('.slider_thumbnail .item').removeClass('active');
            jQuery('.slider_thumbnail .item[data-number="'+nextSlide+'"]').addClass('active');
        });
       jQuery('.slider_thumbnail .item').click(function (e) {
            e.preventDefault();
            jQuery('.slider_thumbnail .item').removeClass('active');
            jQuery(this).addClass('active');
            let $num = jQuery(this).data('number');
            setTimeout(function () {
                jQuery('.banner_site').slick('slickGoTo', $num);
            },200);
        });
    },
    showBtnSearch: function(){
        jQuery('.search_box a').click(function(e){
            e.preventDefault();
            jQuery(this).parent('.search_box').toggleClass('active');
        })
    }
};
jQuery(document).ready(function () {
    //App.sliderHome();
    //App.showBtnSearch();
});

new fullpage('#fullpage',{
    licenseKey: '558F2BA0-3BF94B75-94951419-B420B651',
    anchors: ['page1', 'page2', 'page3', 'page4','page5','page6','page7','page8','footer'],
    responsiveWidth: 1024,
    onLeave: function(origin, destination, direction){
        //it won't scroll if the destination is the 3rd section
        if(destination.index == 0){
            jQuery('#back-to-top').removeClass('scrolling');
            jQuery('.Header-site').removeClass('headergreen');
        } else{
            jQuery('#back-to-top').addClass('scrolling');
            jQuery('.Header-site').addClass('headergreen');
        }
        
    }
});
$(document).on('click', '#home', function(){
    fullpage_api.moveTo('page1', 1);
    jQuery('.overlay').css({'display':'none'});
    jQuery('.nav__mobile').css({'transform':'translateX(100%)'})
});
$(document).on('click', '.Search-more', function(){
    fullpage_api.moveTo('page2', 1);
});
$(document).on('click', '#Location', function(){
    fullpage_api.moveTo('page2', 1);
    jQuery('.overlay').css({'display':'none'});
    jQuery('.nav__mobile').css({'transform':'translateX(100%)'})
});
$(document).on('click', '#overview', function(){
    fullpage_api.moveTo('page3', 1);
    jQuery('.overlay').css({'display':'none'});
    jQuery('.nav__mobile').css({'transform':'translateX(100%)'})
});
$(document).on('click', '#utilities', function(){
    fullpage_api.moveTo('page6', 1);
    jQuery('.overlay').css({'display':'none'});
    jQuery('.nav__mobile').css({'transform':'translateX(100%)'})
});
$(document).on('click', '#dev', function(){
    fullpage_api.moveTo('page7', 1);
    jQuery('.overlay').css({'display':'none'});
    jQuery('.nav__mobile').css({'transform':'translateX(100%)'})
});
$(document).on('click', '#contact', function(){
    fullpage_api.moveTo('page8', 1);
    jQuery('.overlay').css({'display':'none'});
    jQuery('.nav__mobile').css({'transform':'translateX(100%)'})
});

//Handle click menu tab
var tabs = document.querySelectorAll('.Header-menu--tab');
for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


//Slide overview
$('.Overview-slide').slick({
    prevArrow:'.leftbtn',
    nextArrow:'.rightbtn',
    asNavFor: '.Slide-photo'
});
$('.Slide-photo').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.Overview-slide',
    centerMode: true,
    focusOnSelect: true,
    fade: true,
    arrows:false,
});

//Slide villa
jQuery('.Slides-villa').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //count
    jQuery('.Count-slide .Current-slide').text('0'+(nextSlide*1+1));
    jQuery('.dots_slider .nav-progress').attr('style','width:'+ 50*(nextSlide*1+1) +'px');
    //slide villa
    jQuery('.Villa-wrapper .Villa-menu .Villa-venue').removeClass('active');
    jQuery('.Villa-wrapper .Villa-menu .Villa-venue[data-number="'+nextSlide+'"]').addClass('active');
});
$('.Slides-villa').slick({
    prevArrow:'.prevbtn',
    nextArrow:'.nextbtn',
    dots: true,
    appendDots: jQuery('.dots_slider')
});

//slide thumbnail
jQuery('.Villa-wrapper .Villa-menu .Villa-venue').click(function (e) {
    e.preventDefault();
    jQuery('.Villa-wrapper .Villa-menu .Villa-venue').removeClass('active');
    jQuery(this).addClass('active');
    let $num = jQuery(this).data('number');
    setTimeout(function () {
        jQuery('.Slides-villa').slick('slickGoTo', $num);
    },200);
});

jQuery('.menu-option').click(function(){
    jQuery('.overlay').css({'display':'block'});
    jQuery('.nav__mobile').css({'transform':'translateX(0%)'})
})
jQuery('.overlay').click(function(){
    jQuery('.overlay').css({'display':'none'});
    jQuery('.nav__mobile').css({'transform':'translateX(100%)'})
})
jQuery('.Closebtn').click(function(){
    jQuery('.overlay').css({'display':'none'});
    jQuery('.nav__mobile').css({'transform':'translateX(100%)'})
})


$(document).ready(function(){
	// scroll body to 0px on click
	$('#back-to-top').click(function () {
        fullpage_api.moveTo('page1', 1);
	});
    jQuery(window).resize(function () {
        autoHeightMobile();
    });
    autoHeightMobile();

    function autoHeightMobile() {
        var windowWidth = jQuery(window).width();
        if (windowWidth < 1024) {
            jQuery('.section:not(.footer_site)').addClass('fp-auto-height');
        } else {
            jQuery('.section:not(.footer_site)').removeClass('fp-auto-height');
        }
    }
});





