$(document).ready(function(){
	$('#menu-principal a').parent().css('font-size', '20px');
	$('#iniciar-sesion').parent().css('font-size', '20px');
});


$(function() {
	var d=300;
    $('#navigation a').each(function(){
		$(this).stop().animate({
          'marginTop':'-80px'
        },d+=150);
    });

    $('#navigation > li').hover(
       function () {
          $('a',$(this)).stop().animate({
             'marginTop':'-2px'
          },200);
       },
       function () {
         $('a',$(this)).stop().animate({
            'marginTop':'-80px'
         },200);
      }
   );
});


$(function(){
  // Slideshow 1
  $("#slider1").responsiveSlides({
	maxwidth: 800,
	speed: 800
   });
});
