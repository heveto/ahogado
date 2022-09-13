var palabra = "";
var clue = "";
var letErroneas = "";
var adivinadas= "";
var asistertos = 0;
var errores = 0;
var correcta = false;
var dict = ["APERTURA","CAPTURAR","SOSTENER","JUNTEAR","ADHESION","OQUEDAD",
"GRIETA","AZURITA","ESTUCO","SONRISA","AXIOMA","DOCTRINA","FILTRADO","APILADO"];

function mostrar() {
	// Habilita selección de cada frame.
	var bloque1 = document.querySelector(".bloque1");
	var bloque2 = document.querySelector(".bloque2");
	var bloque3 = document.querySelector(".bloque3");
}

function limpiar() {
	// Limpia canvas, mensajes de identificadores y vacia variables.
	var pantalla = document.querySelector("canvas");
	var trazo = pantalla.getContext("2d");
	trazo.clearRect(0,0,360,360);
	trazo.fillStyle = "#F3F5FC";
    trazo.fillRect(0,0,360,360);

	palabra = "";
	clue = "";
	letErroneas = "";
	adivinadas= "";
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

function sortearPalabra(dict){
	// Selecciona una palabra al azar.
	var sorteada = Math.floor(Math.random()*dict.length);
	palabra = dict[sorteada];
}

function iniciarJuego(argument) {
	// Muestra frame de juego con lineas pista.
		
	mostrar();
	bloque1.style.display = "none";
	bloque2.style.display = "none";
	bloque3.style.display = "block";

	limpiar();
	sortearPalabra(dict);
	mostraPista(palabra);
	dibujarAhorcado(0);
}

function reiniciarJuego () {	
	limpiar();
	iniciarJuego();
}

function agregarPalabra(tecla) {
	// Muestra frame para agregar palabras.
	palabra = "";

	mostrar();
	bloque1.style.display = "none";
	bloque2.style.display = "block";
	bloque3.style.display = "none";

	document.querySelector("#cadena").value = "";
}

function guardar() {
	// Agrega palabra de hasta 8 letras al diccionario.
	var palabraNueva = document.querySelector("#cadena").value.toUpperCase();
	var long = palabraNueva.length;

	if (long < 9) {
		dict.push(palabraNueva);
		limpiar();
		iniciarJuego();
	}
	
	if (long > 8) {
		alert("No fue agregada, por favor ingrese una palabra de hasta 8 letras.");
		document.querySelector("#cadena").value = "";
	}	
}

function cancelar() {
	// Cancela juego y vuelve a frame principal.
	mostrar();
	bloque1.style.display = "block";
	bloque2.style.display = "none";
	bloque3.style.display = "none";

	limpiar();
}

function desistir() {
	// Regresa a frame principal a travez de cancelar.
	cancelar();
}

function dibujarAhorcado(error) {
	// Va dibujando ahorcado segun errores.
	var pantalla = document.querySelector("canvas");
	var trazo = pantalla.getContext("2d");

	trazo.strokeStyle = "darkblue";
	trazo.beginPath();
	trazo.lineWidth = 5;

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
	// Muestra numero de letras de la palabra con lineas.
	document.getElementById("pista").innerHTML = "";
	for (var i = 0; i < palabra.length; i++) {
		clue += "_ ";		
	}
	document.getElementById("pista").innerHTML = clue;
}

function revisarAdivinadas(event) {
	// Revisa si ya se uso la letra.
	var repetida = false;

	for (var i = 0; i < adivinadas.length; i++) {
		if (event == adivinadas[i]) {
			repetida = true;
			i = adivinadas.length;
		}		
	}

	for (var i = 0; i < letErroneas.length; i++) {
		if (event == letErroneas[i]) {
			repetida = true;
			i = letErroneas.length;
		}		
	}

	if (repetida == false) {
		teclaPulsada(event);
	}
}

function revisarTecla (teclaPulsada) {
	//Muestra letra si coincidio con la tecla pulsada.
	correcta = false;

	if (teclaPulsada == palabra[0]) {
		document.getElementById("let1").innerHTML = teclaPulsada;
		adivinadas += teclaPulsada;
		correcta = true;
		asistertos++;
	}

	if (teclaPulsada == palabra[1]) {
		document.getElementById("let2").innerHTML = palabra[1];
		adivinadas += teclaPulsada;
		correcta = true;
		asistertos++;
	}
	
	if (teclaPulsada == palabra[2]) {
		document.getElementById("let3").innerHTML = palabra[2];
		adivinadas += teclaPulsada;
		correcta = true;
		asistertos++;
	}

	if (teclaPulsada == palabra[3]) {
		document.getElementById("let4").innerHTML = palabra[3];
		adivinadas += teclaPulsada;
		correcta = true;
		asistertos++;
	}
	
	if (teclaPulsada == palabra[4]) {
		document.getElementById("let5").innerHTML = palabra[4];
		adivinadas += teclaPulsada;
		correcta = true;
		asistertos++;
	}

	if (teclaPulsada == palabra[5]) {
		document.getElementById("let6").innerHTML = palabra[5];
		adivinadas += teclaPulsada;
		correcta = true;
		asistertos++;
	}
	
	if (teclaPulsada == palabra[6]) {
		document.getElementById("let7").innerHTML = palabra[6];
		adivinadas += teclaPulsada;
		correcta = true;
		asistertos++;
	}

	if (teclaPulsada == palabra[7]) {
		document.getElementById("let8").innerHTML = palabra[7];
		adivinadas += teclaPulsada;
		correcta = true;
		asistertos++;
	}
}

function teclaPulsada (event) {
	//Esta función lleva la lógica del juego.
	var teclaPulsada = event;

	for (var i = 0; i < palabra.length; i++) {
		if (errores < 7 && palabra[i] != teclaPulsada) {
			revisarTecla(teclaPulsada);
			i = palabra.length;
		}
	}
	
	if (asistertos == palabra.length && errores < 7) {
		// Ganaste.
		document.getElementById("resultado").innerHTML = "Ganaste !";
		errores = 8;
	}

	if (errores < 7 && correcta == false) {
		letErroneas += teclaPulsada + " ";
		errores ++;
		dibujarAhorcado(errores);
	}

	if (errores == 7) {
		// Perdiste.
		document.getElementById("resultado").innerHTML = "Fin del juego";		
	}
	document.getElementById("letErroneas").innerHTML = letErroneas;	
}

document.addEventListener('keypress', (event) => {
	// Espera y revisa presion de alguna tecla.
	var tecla = event.key.toUpperCase();
	var abc = "QWERTYUIOPASDFGHJKLÑZXCVBNM";

	for (var i = 0; i < abc.length; i++) {
		if (abc[i] == tecla) {
			revisarAdivinadas(tecla);
		}
	}
});