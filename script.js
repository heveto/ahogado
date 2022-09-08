function mostrar() {
	// Habilita selección de cada frame.
	var bloque1 = document.querySelector(".bloque1");
	var bloque2 = document.querySelector(".bloque2");
	var bloque3 = document.querySelector(".bloque3");
}

function iniciarJuego(argument) {
	// body...
	mostrar();
	bloque1.style.display = "none";
	bloque2.style.display = "none";
	bloque3.style.display = "block";

	dibujarAhorcado();
}

function agregarPalabra(argument) {
	// body...
	mostrar();
	bloque1.style.display = "none";
	bloque2.style.display = "block";
	bloque3.style.display = "none";
}

function guardar(argument) {
	// body...
	mostrar();
	bloque1.style.display = "none";
	bloque2.style.display = "none";
	bloque3.style.display = "block";
}

function cancelar(argument) {
	// body...
	mostrar();
	bloque1.style.display = "block";
	bloque2.style.display = "none";
	bloque3.style.display = "none";
}

function desistir(argument) {
	// body...
	mostrar();
	bloque1.style.display = "block";
	bloque2.style.display = "none";
	bloque3.style.display = "none";
}

function dibujarAhorcado(error) {
	// body...
	var pantalla = document.querySelector("canvas");
	var trazo = pantalla.getContext("2d");

	trazo.strokeStyle = "darkblue";   //propiedad
	trazo.beginPath();
	trazo.lineWidth = 5;


	trazo.moveTo(30,350);
	trazo.lineTo(330,350);
	trazo.stroke();

	trazo.moveTo(110,350);
	trazo.lineTo(110,10);
	trazo.stroke();

	trazo.lineTo(280,10);
	trazo.stroke();

	trazo.lineTo(280,60);
	trazo.stroke();

	trazo.arc(280,100,40,0,2*Math.PI);

	trazo.moveTo(280,140);
	trazo.lineTo(280,220);
	trazo.stroke();

	trazo.moveTo(280,140);
	trazo.lineTo(240,200);
	trazo.moveTo(280,140);
	trazo.lineTo(320,200);
	trazo.stroke();

	trazo.moveTo(280,220);
	trazo.lineTo(240,300);
	trazo.moveTo(280,220);
	trazo.lineTo(320,300);
	trazo.stroke();

	//trazo.clearRect(0, 0, pantalla.width, pantalla.height);
}

function name(argument) {
	// body...

}
