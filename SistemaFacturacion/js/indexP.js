console.log("Conectado...");
import {guardarProduto } from "./Controlador/Modelo.js";

import dataClientes from "./Controlador/Data.js";
import Producto from "./Class/Producto.js";


export let cliente = [];
export let producto = [];
const formularioP = document.querySelector("#producto");


document.addEventListener("DOMContentLoaded", () => {
    const listaProductos = document.querySelector('.container-registro')
    if(producto.length >= 0){
        listaProductos.innerHTML += `
            <div class="empty">
                <h1>No hay Registros</h1>
            </div>
        `
    }
});


formularioP.addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const stock = document.querySelector("#stock").value;
    const precio = document.querySelector("#precio").value;
    const empresa = document.querySelector("#empresa").value;
    guardarProduto(nombre, stock, precio, empresa);
    formularioP.reset();
})