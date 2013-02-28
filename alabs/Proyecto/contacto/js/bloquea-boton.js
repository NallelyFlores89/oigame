$(document).ready(function(){
	$('#nombre-contacto').keypress(function() {
        if(($('#nombre-contacto').val() != '')&&($('#correo-contacto').val() != '')&&($('#asunto-contacto').val() != '')&&($('#mensaje').val() != ''))
        {
			$('#form-contacto input[type=submit]').button('enable');
		}
		else
			$('#form-contacto input[type=submit]').button('disable');		
	});
	$('#correo-contacto').keypress(function() {
        if(($('#nombre-contacto').val() != '')&&($('#correo-contacto').val() != '')&&($('#asunto-contacto').val() != '')&&($('#mensaje').val() != ''))
        {
			$('#form-contacto input[type=submit]').button('enable');
		}
		else
			$('#form-contacto input[type=submit]').button('disable');		
	});
	$('#asunto-contacto').keypress(function() {
        if(($('#nombre-contacto').val() != '')&&($('#correo-contacto').val() != '')&&($('#asunto-contacto').val() != '')&&($('#mensaje').val() != ''))
        {
			$('#form-contacto input[type=submit]').button('enable');
		}
		else
			$('#form-contacto input[type=submit]').button('disable');		
	});
	$('#mensaje').keypress(function() {
        if(($('#nombre-contacto').val() != '')&&($('#correo-contacto').val() != '')&&($('#asunto-contacto').val() != '')&&($('#mensaje').val() != ''))
        {
			$('#form-contacto input[type=submit]').button('enable');
		}
		else
			$('#form-contacto input[type=submit]').button('disable');		
	});
});
