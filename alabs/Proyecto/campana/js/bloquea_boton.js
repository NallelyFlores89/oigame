
$(document).ready(function(){
	$('#nombreUnirse').keypress(function() {
        if(($('#nombreUnirse').val() != '')&&($('#correoUnirse').val() != ''))
        {
			$('form#Formulario input[type=submit]').button('enable');
		}
		else
			$('form#Formulario input[type=submit]').button('disable');		
	});
	$('#correoUnirse').keypress(function() {
        if(($('#nombreUnirse').val() != '')&&($('#correoUnirse').val() != ''))
        {
			$('form#FormularioUnirse input[type=submit]').button('enable');
		}
		else
			$('form#FormularioUnirse input[type=submit]').button('disable');		
	});
});

