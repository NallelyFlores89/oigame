$().ready(function() {
	$("form").validate({
		rules: {                      
			pass1: {                 //Validación de la contraseña
				required: true,
				minlength: 5
			},
			pass2: {
				required: true,     //Validación de la confirmación de la contraseña
				equalTo: "#pass1"   //Se verifica que sea igual a la contraseña1
			},
		},
		messages: {
			pass1: {
				required: "Este campo es obligatorio".fontcolor("#c31d1d"),  //Envía el mensaje de error con letras rojas
				minlength: "La contraseña debe tener al menos 5 letras".fontcolor("#c31d1d")
			},
			pass2: {
				required: "Por favor, confirma contraseña".fontcolor("#c31d1d"),
				equalTo: "Las contraseñas no coinciden".fontcolor("#c31d1d")
			},
		}
	});
});
