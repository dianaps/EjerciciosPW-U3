/*
* Función: muestra
* Objetivo: llena la información para el examen y muestra tabla y botón
* Parámetros: recibe el valor de la base (es cadena), el identificador de la tabla visual y el elemento a mostrar
*/
function muestra(sValor, oTbl, oElemento){
var nTabla=0, i=0;
var oLinea;
var oCeldaOpe, oCeldaRes;
var oCtrl;
	if (isNaN(sValor))
		alert("Debe elegir la tabla de multiplicar");
	else{
		nTabla = parseInt(sValor, 10);
		if (oElemento != null){
			oElemento.style.visibility = "visible";

			if (oTbl != null){
				//Si la tabla está llena, vaciarla primero
				if (oTbl.rows.length>1){
					for (i=1; i<=10; i++)
						oTbl.deleteRow(-1);
				}

				//Colocar operaciones y campos para resultado en la tabla
				for (i=1; i<=10; i++){
					oLinea = oTbl.insertRow(-1);
					oCeldaOpe = oLinea.insertCell(0);
					oCeldaRes = oLinea.insertCell(1);

					oCeldaOpe.innerHTML = nTabla + " * " + i;

					oCtrl = document.createElement("input");
					oCtrl.type="text";
					oCtrl.id = "txtResultado"+i;
					    //<input type="text" id="txtResultado1"></input>
							//<input type="text" id="txtResultado2"></input>
							//<input type="text" id="txtResultado3"></input>
							//.....
							//<input type="text" id="txtResultado10"></input>
					oCeldaRes.appendChild(oCtrl);
				}
			}
		}
	}
}

/*
* Función: califica
* Objetivo: verifica las respuestas capturadas en cada celda de la tabla
* Parámetros: recibe el valor de la base (es cadena), el identificador de la tabla visual y el elemento a mostrar
*/
function califica(sValor, oTbl){
var nTabla=0, i=0, nCapturado=0, nCalif=0;
var sValorCapturado="", sErr="";
var cell;
	if (isNaN(sValor))
		sErr = "Debe elegir la tabla de multiplicar";
	else{
		nTabla = parseInt(sValor, 10);

		//Recorrer los campos si ya están pintados
		if (oTbl.rows.length>1){
			for (i=1; i<=10; i++){
				sValorCapturado = document.getElementById("txtResultado"+i).value;
				if (isNaN(sValorCapturado))
					sErr = sErr + "Error de captura en el resultado "+i + "\n";
				else{
					nCapturado = parseInt(sValorCapturado,10);
					cell=document.getElementById('txtResultado'+i);
					if (nCapturado == (nTabla*i)){
						nCalif++;
						cell.style.backgroundColor='green';
					}
						
						//mostra fondo verde en el input text cuan es correcta la respuestas
					else
						cell.style.backgroundColor='red';
					  //mostra fondo incorrecta en el input text cuan es correcta la respuestas
				}
			}
		}
	}
	if (sErr == "")
		alert("Calif = "+nCalif);
	else
		alert(sErr);
}
