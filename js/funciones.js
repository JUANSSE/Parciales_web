var editado=false;

function Editable(nodo){
	if (editado == false) {
		var nodoTd = nodo.parentNode;
		var nodoTr = nodoTd.parentNode; 
		var nodoForm = document.getElementById('Form');
		var nodosEnTr = nodoTr.getElementsByTagName('td');
		var alimento = nodosEnTr[0].textContent; 
		var calorias = nodosEnTr[1].textContent;
		var grasas = nodosEnTr[2].textContent; 
		var proteina = nodosEnTr[3].textContent;
		var carbohidratos = nodosEnTr[4].textContent;
		var emoji = nodosEnTr[5].textContent;  
		var opciones = nodosEnTr[6].textContent;
		var nuevoHtml = '<td><input type="text" name="alimento" id="alimento" value="'+alimento+'" size="10"></td>'+
		'<td><input type="text" name="calorias" id="calorias" value="'+calorias+'" size="5"</td>'+
		'<td><input type="text" name="grasas" id="grasas" value="'+grasas+'" size="5"</td>'+
		'<td><input type="text" name="proteina" id="proteina" value="'+proteina+'" size="5"</td>'+
		'<td><input type="text" name="carbohidratos" id="carbohidratos" value="'+carbohidratos+'" size="5"</td>' +
		'<td><select name="emoji" id="emoji"><option value="😆">Bien</option><option value="😵">Mal</option></select></td>' + 
		'<td>En edición</td>';
		nodoTr.innerHTML = nuevoHtml;

		nodoForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+
		'<form name = "formulario" action="Recibido.html" method="get" onsubmit="Envio()" onreset="borrar()">'+
		'<input class="boton_aceptar" type = "submit" value="Aceptar"> <input class="boton_cancelar" type="reset" value="Cancelar">';
		editado = "true";
	}
	else 
	{
		alert ('Solo se puede editar una línea. Recargue la página para poder editar otra');
	}
}

function borrar(){
	window.location.reload();
}

function Envio(){
	var nodoForm = document.getElementById('Form');
	nodoForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+
	'<form name = "formulario" action="Recibido.html" method="get" onsubmit="Envio()" onreset="borrar()">'+
	'<input type="hidden" name="alimento" value="'+document.querySelector('#alimento').value+'">'+
	'<input type="hidden" name="calorias" value="'+document.querySelector('#calorias').value+'">'+
	'<input type="hidden" name="grasas" value="'+document.querySelector('#grasas').value+'">'+
	'<input type="hidden" name="proteina" value="'+document.querySelector('#proteina').value+'">'+
	'<input type="hidden" name="carbohidratos" value="'+document.querySelector('#carbohidratos').value+'">'+
	'<input type="hidden" name="emoji" value="'+document.querySelector('#emoji').value+'">'+
	'<input class="boton_aceptar" type = "submit" value="Aceptar"> <input class="boton_cancelar" type="reset" value="Cancelar">';
	document.formulario.submit();
}
