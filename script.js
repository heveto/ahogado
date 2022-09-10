var palabra = "";
var clue = "";
var letErroneas = "";
var asistertos = 0;
var errores = 0;
var correcta = false;

function mostrar() {
	// Habilita selección de cada frame.
	var bloque1 = document.querySelector(".bloque1");
	var bloque2 = document.querySelector(".bloque2");
	var bloque3 = document.querySelector(".bloque3");
}

function limpiar() {
	// body...
	var pantalla = document.querySelector("canvas");
	var trazo = pantalla.getContext("2d");
	trazo.clearRect(0,0,360,360);
	trazo.fillStyle = "lightgrey";
    trazo.fillRect(0,0,360,360);
    
	palabra = "";
	clue = "";
	letErroneas = "";
	asistertos = 0;
	errores = 0;

	document.getElementById("let1").innerHTML = "";
	document.getElementById("let2").innerHTML = "";
	document.getElementById("let3").innerHTML = "";
	document.getElementById("let4").innerHTML = "";
	document.getElementById("let5").innerHTML = "";
	document.getElementById("let6").innerHTML = "";
	document.getElementById("let7").innerHTML = "";
	document.getElementById("let8").innerHTML = "";

	document.getElementById("pista").innerHTML = "";
	document.getElementById("resultado").innerHTML = "";
	document.getElementById("letErroneas").innerHTML = "";
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

}

function reiniciarJuego () {	
	limpiar();
	iniciarJuego();
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

	limpiar();
}

function cancelar(argument) {
	// body...
	mostrar();
	bloque1.style.display = "block";
	bloque2.style.display = "none";
	bloque3.style.display = "none";

	limpiar();
}

function desistir(argument) {
	// body...
	mostrar();
	bloque1.style.display = "block";
	bloque2.style.display = "none";
	bloque3.style.display = "none";

	limpiar();
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

function mostraPista() {
	// body...
	document.getElementById("pista").innerHTML = "";
	for (var i = 0; i < palabra.length; i++) {
		clue += "_ ";		
	}
	document.getElementById("pista").innerHTML = clue;
}

function revisarTecla (teclaPulsada) {
	//Muestra letra si coincidio con la tecla pulsada.
	correcta = false;

	if (teclaPulsada == palabra[0]) {
		document.getElementById("let1").innerHTML = palabra[0];
		correcta = true;
		asistertos++;
	}

	if (teclaPulsada == palabra[1]) {
		document.getElementById("let2").innerHTML = palabra[1];
		correcta = true;
		asistertos++;
	}
	
	if (teclaPulsada == palabra[2]) {
		document.getElementById("let3").innerHTML = palabra[2];
		correcta = true;
		asistertos++;
	}

	if (teclaPulsada == palabra[3]) {
		document.getElementById("let4").innerHTML = palabra[3];
		correcta = true;
		asistertos++;
	}
	
	if (teclaPulsada == palabra[4]) {
		document.getElementById("let5").innerHTML = palabra[4];
		correcta = true;
		asistertos++;
	}

	if (teclaPulsada == palabra[5]) {
		document.getElementById("let6").innerHTML = palabra[5];
		correcta = true;
		asistertos++;
	}
	
	if (teclaPulsada == palabra[6]) {
		document.getElementById("let7").innerHTML = palabra[6];
		correcta = true;
		asistertos++;
	}

	if (teclaPulsada == palabra[7]) {
		document.getElementById("let8").innerHTML = palabra[7];
		correcta = true;
		asistertos++;
	}
}

function teclaPulsada (event) {
	//Almacenamos en valor de la tecla pulsada
	var teclaPulsada = event;
	
	var pos = 0;

	if (errores <= 7) {
		revisarTecla(teclaPulsada);
	}

	if (asistertos == palabra.length) {
		// Ganaste...
		document.getElementById("resultado").innerHTML = "Ganaste !";
		console.log("ganaste");
	}

	if (errores<=7 && correcta == false) {
		letErroneas += teclaPulsada + " ";
		errores ++;

		dibujarAhorcado(errores);
	}

	if (errores == 7) {
		// Perdiste...
		document.getElementById("resultado").innerHTML = "Perdiste !";
		console.log("perdiste");
	}
	document.getElementById("letErroneas").innerHTML = letErroneas;	
}

document.addEventListener('keypress', (event) => {
	var tecla = event.key.toUpperCase();
	console.log("Tecla precionada: " + tecla);

	teclaPulsada(tecla);
});