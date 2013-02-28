$(document).ready(function(){
	$('#boton-unirse a').parent().css('font-size', '20px');
});

$(document).on('pageinit',function(){
   $('.ui-collapsible .ui-icon').removeClass('ui-icon-plus').addClass('ui-icon-arrow-d');
    $('[data-role=collapsible]')
        .on('expand',function(){
            $(this).find('.ui-icon').removeClass('ui-icon-arrow-d').addClass('ui-icon-arrow-u');               
        })
        .on('collapse',function(){
            $(this).find('.ui-icon').removeClass('ui-icon-arrow-u').addClass('ui-icon-arrow-d');
        });        
});

