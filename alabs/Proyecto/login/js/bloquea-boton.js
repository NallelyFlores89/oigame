$(document).ready(function(){
	$('#Usr').keypress(function() {
        if(($('#Usr').val() != '')&&($('#pass').val() != ''))
        {
			$('form#Formulario input[type=submit]').button('enable');
		}
		else
			$('form#Formulario input[type=submit]').button('disable');		
	});
	$('#pass').keypress(function() {
        if(($('#Usr').val() != '')&&($('#pass').val() != ''))
        {
			$('form#Formulario input[type=submit]').button('enable');
		}
		else
			$('form#Formulario input[type=submit]').button('disable');		
	});
	
	$('#correoIns').keypress(function() {
        if(($('#correoIns').val() != ''))
        {
			$('form#Formulario_Ins input[type=submit]').button('enable');
		}
		else
			$('form#Formulario_Ins input[type=submit]').button('disable');		
	});
	
	$('#correoPass').keypress(function() {
        if(($('#correoPass').val() != ''))
        {
			$('form#Formulario_Pass input[type=submit]').button('enable');
		}
		else
			$('form#Formulario_Pass input[type=submit]').button('disable');		
	});
});

