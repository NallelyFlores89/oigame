$(document).ready( function() {
	$(".botonUnirse").click( function() {
			$.alerts.dialogClass = $(this).attr('id'); // set custom style class
			jAlert('¡Gracias por unirte!', 'Oiga.me', function() {
			$.alerts.dialogClass = null; // reset to default
		});
	});
});

//En caso de que el usuario no esté registrado, activar esta función:

/**$(document).ready( function() {
	$(".alert_style_example").click( function() {
			$.alerts.dialogClass = $(this).attr('id'); // set custom style class
			jAlert('Tu mensaje está siendo validado', 'Oiga.me', function() {
			$.alerts.dialogClass = null; // reset to default
		});
	});
});**/

$(document).ready(function(){
	$('#botonUnirse').parent().css('font-size', '20px');
});
