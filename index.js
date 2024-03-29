const novacio = `        <div id="contenedor-2__text">
<textarea
  id="text-2"
  class="contenedor__text-area"
  onchange="actualizar()"
  readonly
></textarea>
<div id="contenedor-2__btn">
  <button class="boton" onclick="copiar()">Copiar</button>
</div>
</div>`;

const contenedor2 = document.querySelector("#contenedor-2");

// Diccionario para cambiar valores
const encriptarDicc = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "obet",
  u: "ufat",
};

/*
    Funcion para encriptar 
    texto: string
    retornar string (cadena encriptada)
*/
function encriptarFunc(texto) {
  let textoEnc = "";
  const s = texto.length;

  for (let i = 0; i < s; i++) textoEnc += encriptarDicc[texto[i]] ?? texto[i];

  return textoEnc;
}

// Funcion para el evento click del boton Encriptar
function encriptar() {
  // Texto ingresado
  const texto1 = document.querySelector("#text-1");
  const texto = texto1.value;

  // Texto vacio
  if (texto == "") {
    alert("Ingrese texto a encriptar o desencriptar");
    return;
  }

  // Iterar en cadena ingresada para verificar minusculas
  for (const caracter of texto) {
    console.log(caracter);
    if (caracter < "a" || caracter > "z") {
      alert("Ingrese solo texto en minuscula");
      texto1.value = "";
      return;
    }
  }

  contenedor2.innerHTML = novacio;

  const encriptacion = document.querySelector("#text-2");

  // Logica
  const textoEncriptado = encriptarFunc(texto);

  // Pegar texto encriptado en el siguiente textarea
  encriptacion.value = textoEncriptado;
}

/*
    Funcion para encriptar 
    textoEncriptado: string
    retornar string (cadena desencriptada)
*/
function desEncriptarFunc(textoEncriptado) {
  let textoDes = "";
  const s = textoEncriptado.length;

  for (let i = 0; i < s; ) {
    const caracter = textoEncriptado[i]; // Caracter de cadena

    // Si el caracter tiene un valor en el diccionario
    if (caracter in encriptarDicc) {
      // Tenemos el tamaño del valor para esa llave
      const val = encriptarDicc[caracter];
      const tamaño = val.length;
      const cadenaAct = textoEncriptado.substring(i, i + tamaño);
      console.log(tamaño, val, cadenaAct);
      // Validamos que el valor sea igual al ingresado
      if (val == cadenaAct) {
        // Añadimos caracter a textoDes
        textoDes += caracter;

        // Sumamos tamaño a i
        i += tamaño;
      } else {
        textoDes += caracter;
        i++;
      }
    } else {
      textoDes += caracter;
      i++;
    }
  }

  return textoDes;
}

// Funcion para el evento click del boton Copiar
function copiar() {
  // Texto de text-2
  const texto = document.querySelector("#text-2").value;

  // Texto desencriptado
  //   const textoDes = desEncriptar(texto);

  // Copiar texto a clipboard
  navigator.clipboard.writeText(texto);
}

// Funcion para el evento click del boton Desencriptar
function desEncriptar() {
  const texto = document.querySelector("#text-1");
  const texto1 = texto.value;
  // Texto vacio
  if (texto1 == "") {
    alert("Ingrese texto a encriptar o desencriptar");
    return;
  }
  // Iterar en cadena ingresada para verificar minusculas
  for (const caracter of texto1) {
    console.log(caracter);
    if (caracter < "a" || caracter > "z") {
      alert("Ingrese solo texto en minuscula");
      texto.value = "";
      return;
    }
  }
  contenedor2.innerHTML = novacio;

  const texto2 = document.querySelector("#text-2");

  const textoDes = desEncriptarFunc(texto1);

  texto2.value = textoDes;
}

// Funcion de inicio
function inicio(e) {
  const text1 = document.querySelector("#text-1");
  text1.value = "";
}

// Cuando inicie
window.onload = inicio;
// window.onresize = tamañopantalla;
