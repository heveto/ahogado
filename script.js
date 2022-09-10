var palabra = "";
var clue = "";
var letErroneas = "";
var asistertos = 0;
var errores = 0;

function mostrar() {
	// Habilita selección de cada frame.
	var bloque1 = document.querySelector(".bloque1");
	var bloque2 = document.querySelector(".bloque2");
	var bloque3 = document.querySelector(".bloque3");
}

function iniciarJuego(argument) {
	// body...
	palabra = "ACARREAR";
	mostrar();
	bloque1.style.display = "none";
	bloque2.style.display = "none";
	bloque3.style.display = "block";

	mostraPista(palabra);

	dibujarAhorcado(0);
	dibujarAhorcado(1);
	dibujarAhorcado(2);
	dibujarAhorcado(3);
	dibujarAhorcado(7);

}

function reiniciarJuego () {
	// body...
	palabra = "";
	asistertos = 0;
	errores = 0;
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
	console.log(error);

	switch(error) {
        case 0: // horca
			trazo.moveTo(30,350);
			trazo.lineTo(330,350);
			trazo.moveTo(110,350);
			trazo.lineTo(110,10);
			trazo.lineTo(280,10);
			trazo.stroke();
			break;

		case 1: // Cuerda
			trazo.moveTo(280,10);
			trazo.lineTo(280,60);
			trazo.stroke();
				break;

		case 2: // Cabeza
			trazo.arc(280,100,40,0,2*Math.PI);
			trazo.stroke();
			break;

		case 3: // Tronco
			trazo.moveTo(280,140);
			trazo.lineTo(280,220);
			trazo.stroke();
			break;

		case 4: // Brazo izq
			trazo.moveTo(280,140);
			trazo.lineTo(240,200);
			trazo.stroke();
			break;

		case 5: // Brazo der
			trazo.moveTo(280,140);
			trazo.lineTo(320,200);
			trazo.stroke();
			break;

		case 6: // Pierna izq
			trazo.moveTo(280,220);
			trazo.lineTo(240,300);
			trazo.stroke();
			break;

		case 7: // Pierna der
			trazo.moveTo(280,220);
			trazo.lineTo(320,300);
			trazo.stroke();
			break;

		default:
			trazo.clearRect(0, 0, pantalla.width, pantalla.height);
			error = 0;
			break;
	}
}

function mostraPista(palabra) {
	// body...
	for (var i = 0; i < palabra.length; i++) {
		clue += "_ ";		
	}
	document.getElementById("pista").innerHTML = clue;
}

function teclado () {
	console.log("pulso");
	//Almacenamos en valor de la tecla pulsada
}

function teclaPulsada (event,palabra) {
	//Almacenamos en valor de la tecla pulsada
	var teclaPulsada = event.keyCode;
	var correcta = false;
	var pos = 0;
	console.log("pulsado");

	for (var i = 0; i < palabra.length; i++) {
		if (leclaPulsada == palabra[i]) {
			clue[pos] = palabra[i];
			correcta = true;
			asistertos++;
		}
		pos = i*2;		
	}

	if (asistertos == palabra.length) {
		// Ganaste...
	}

	if (errores == 8) {
		// Perdiste...
	}

	if (correcta == false) {
		letErroneas += teclaPulsada + " ";
	}
	document.getElementById("pista").innerHTML = clue; 
	// document.getElementById("letErroneas").innerHTML = "E M P O ";
	// document.getElementById("letErroneas").innerHTML = letErroneas;	
}