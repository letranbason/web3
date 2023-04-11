App ={
    sliderPartner: function(){

    }
};
jQuery(document).ready(function(){

});

new fullpage('#fullpage',{
    licenseKey: '558F2BA0-3BF94B75-94951419-B420B651',
    anchors: ['page1', 'page2', 'page3', 'page4','page5','page6','page7','page8','footer'],
    responsiveWidth: 1024,
    onLeave: function(origin, destination, direction){
        //it won't scroll if the destination is the 3rd section
        if(destination.index == 0){
            jQuery('#back').removeClass('back-top-scroll');
            jQuery('.header_site').removeClass('header_color');
        } else{
            jQuery('#back').addClass('back-top-scroll')
            jQuery('.header_site').addClass('header_color');
        }
        
    },
    autoScrolling:true,
    scrollHorizontally: true,
});


$(document).on('click', '#home', function(){
    fullpage_api.moveTo('page1', 1);
});
$(document).on('click', '.more', function(){
    fullpage_api.moveTo('page2', 1);
});
$(document).on('click', '#Location', function(){
    fullpage_api.moveTo('page2', 1);
});
$(document).on('click', '#overview', function(){
    fullpage_api.moveTo('page3', 1);
});
$(document).on('click', '#conviniece', function(){
    fullpage_api.moveTo('page6', 1);
});
$(document).on('click', '#dev', function(){
    fullpage_api.moveTo('page7', 1);
});
$(document).on('click', '#contact', function(){
    fullpage_api.moveTo('page8', 1);
});

var tabs = document.querySelectorAll('.menu');
for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


$(document).ready(function(){
	$('#back').click(function () {
        fullpage_api.moveTo('page1', 1);
	});
});