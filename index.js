document.querySelector(".hamburger").addEventListener("click", menubarButton);
document.querySelector("#inicio").addEventListener("click", mostrarInicio);
document.querySelector("#form").addEventListener("click", mostrarForm);
document.querySelector("#saludar").addEventListener("click", saludar);
document
	.querySelector("#cerrar-saludar")
	.addEventListener("click", cerrarSaludar);

const SeccionInicio = document.querySelector("#seccion-inicio");
const SeccionFormulario = document.querySelector("#seccion-formulario");
const Msj = document.querySelector(".msj");

function menubarButton() {
	let menu = document.querySelector(".menu");
	if (menu.style.display == "flex") {
		menu.style.display = "none";
	} else {
		menu.style.display = "flex";
	}
}

function mostrarInicio() {
	SeccionInicio.style.display = "flex";
	SeccionFormulario.style.display = "none";
}
function mostrarForm() {
	SeccionInicio.style.display = "none";
	Msj.style.display = "none";
	SeccionFormulario.style.display = "flex";
}

function saludar() {
	Msj.style.display = "flex";
}
function cerrarSaludar() {
	Msj.style.display = "none";
}
