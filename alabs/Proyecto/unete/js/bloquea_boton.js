
$(document).ready(function(){
	$('#correo').keypress(function() {
        if(($('#correo').val() != '')&&($('#pass1').val() != '')&&($('#pass2').val() != ''))
        {
			$('form#Formulario input[type=submit]').button('enable');
		}
		else
			$('form#Formulario input[type=submit]').button('disable');		
	});
	$('#pass1').keypress(function() {
        if(($('#correo').val() != '')&&($('#pass1').val() != '')&&($('#pass2').val() != ''))
        {
			$('form#Formulario input[type=submit]').button('enable');
		}
		else
			$('form#Formulario input[type=submit]').button('disable');		
	});
	$('#pass2').keypress(function() {
        if(($('#correo').val() != '')&&($('#pass1').val() != '')&&($('#pass2').val() != ''))
        {
			$('form#Formulario input[type=submit]').button('enable');
		}
		else
			$('form#Formulario input[type=submit]').button('disable');		
	});

});

$(document).ready(function(){
	$('#correoPass').keypress(function() {
        if(($('#correoPass').val() != ''))
        {
			$('form#Formulario_Pass input[type=submit]').button('enable');
		}
		else
			$('form#Formulario_Pass input[type=submit]').button('disable');		
	});
});

$(document).ready(function(){
	$('#correoIns').keypress(function() {
        if(($('#correoIns').val() != ''))
        {
			$('form#Formulario_Ins input[type=submit]').button('enable');
		}
		else
			$('form#Formulario_Ins input[type=submit]').button('disable');		
	});
});




