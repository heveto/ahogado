function mostrar() {
	// Habilita selección de cada frame.
	var bloque1 = document.querySelector(".bloque1");
	var bloque2 = document.querySelector(".bloque2");
	var bloque3 = document.querySelector(".bloque3");
}

function iniciarJuego(argument) {
	// body...
	var palabra = "ACARREAR";
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
	var clue = "";

	for (var i = 0; i < palabra.length; i++) {
		clue += "_ ";		
	}
	document.getElementById("pista").innerHTML = clue;
}

function teclado () {
	console.log("pulso");
	//Almacenamos en valor de la tecla pulsada
	var teclaPulsada = event.keyCode;
	var letErroneas = "";

	letErroneas += teclaPulsada;

	document.getElementById("let1").innerHTML = palabra[0];
	document.getElementById("let2").innerHTML = palabra[1];
	document.getElementById("let3").innerHTML = palabra[2];
	document.getElementById("let4").innerHTML = palabra[3];
	document.getElementById("let5").innerHTML = palabra[4];
	document.getElementById("let6").innerHTML = palabra[5];
	document.getElementById("let7").innerHTML = palabra[6];
	document.getElementById("let8").innerHTML = palabra[7];

	return document.getElementById("letErroneas").innerHTML = letErroneas;
}

function name(argument) {
	// body...

}