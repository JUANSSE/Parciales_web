var url_string = window.location.href;
var url = new URL(url_string);
var alimento = url.searchParams.get("alimento");
var calorias = url.searchParams.get("calorias");
var grasas = url.searchParams.get("grasas");
var proteina = url.searchParams.get("proteina");
var carbohidratos = url.searchParams.get("carbohidratos");
var emoji = url.searchParams.get("emoji");

document.getElementById("alimento_dato").value = alimento;
document.querySelector('#alimento_dato').innerText = alimento;

document.getElementById("calorias_dato").value = calorias;
document.querySelector('#calorias_dato').innerText = "Calorías (kCal) = "+calorias;

document.getElementById("grasas_dato").value = grasas;
document.querySelector('#grasas_dato').innerText = "Grasas (g) = "+grasas;

document.getElementById("proteina_dato").value = proteina;
document.querySelector('#proteina_dato').innerText = "Proteína (g) = "+proteina;

document.getElementById("carbohidratos_dato").value = carbohidratos;
document.querySelector('#carbohidratos_dato').innerText = "Carbohidratos (g) = "+carbohidratos;

document.getElementById("emoji_dato").value = emoji;
document.querySelector('#emoji_dato').innerText = emoji