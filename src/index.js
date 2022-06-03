// const element = document.createElement("h1"); // creamos elemento
// element.innerText = "JovenesProgramadores"; // el texto que pondremos

// const container = document.getElementById('root'); // creamos una variable que obtiene la ID

// container.appendChild(element); // que queremos mostrar

import React from 'react';
import ReactDOM from 'react-dom';
// estas dos herramientas trabajarán en conjunto: React como análogo a createElement y ReactDOM a appendChild

// creamos una variable
const name = 'Felipe';

const element = <h1>¡Bienvenido, {name}, a React en Jovenes Programadores! </h1>

//const element = <h1> ¡React en Jovenes Programadores! </h1>;

const container = document.getElementById("root");

ReactDOM.render(element, container);
// ahora, lo que haremos diferente a lo anterior será el "appendChild."
// utilizaremos el método ReactDOM.render el cual está compuesto de 2 argumentos.
// ¿qué queremos renderizar? y ¿Dónde lo queremos renderizar?