console.log("Conectado...");
import { guardarCliente, guardarProduto } from "./Controlador/Modelo.js";

import dataClientes from "./Controlador/Data.js";
import Producto from "./Class/Producto.js";

// import Persona from './Class/Persona.js';
// import Cliente from './Class/Cliente.js';

// const persona = new Persona(72009461,"Ivan", "Castro", "14-09-1979", "M", "COL");
// const cliente = new Cliente(72009461,"Ivan", "Castro", "14-09-1979", "M", "COL",12345,"Premium");

// console.log("Datos de La Clase Persona (Padre)");
// persona.mostrarDatos();
// console.log("Datos de La Clase Cliente (Hija)");
// cliente.mostrarDatos();


export let cliente = [];
export let producto = [];
const formulario = document.querySelector("#cliente");
const formularioP = document.querySelector("#producto");

document.addEventListener("DOMContentLoaded", () => {
    const listaClientes = document.querySelector('.container-registro')
    if(cliente.length >= 0){
        listaClientes.innerHTML += `
            <div class="empty">
                <h1>No hay Registros</h1>
            </div>
        `
    }
});

// formulario.addEventListener("submit", function(e){
//     e.preventDefault();    
//     const tipoDoc = document.querySelector("#tipoDocumento").value
//     const nidentificacion = document.querySelector("#doc").value
//     const genero = document.querySelector("#genero").value
//     const nombre = document.querySelector("#nombre").value
//     const apellido = document.querySelector("#apellido").value
//     const fecha_nac = document.querySelector("#fecha_nac").value
//     const nacio = document.querySelector("#nac").value
//     guardarCliente(tipoDoc, nidentificacion, genero, nombre, apellido, fecha_nac, nacio)
//     formulario.reset()
// })

formularioP.addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const stock = document.querySelector("#stock").value;
    const precio = document.querySelector("#precio").value;
    const empresa = document.querySelector("#empresa").value;
    guardarProduto(nombre, stock, precio, empresa);
    formularioP.reset();
})