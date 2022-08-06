import Producto from '../Class/Producto.js';
import { generarID, limpiarHTML } from '../helpers/funciones.js';
import { producto } from '../index.js';

const listaProductos = document.querySelector('.container-registro')

class Producto {
    // Constructor
    constructor(idProdu, nombre, precio, stock){
        // this.idProdu = idProdu;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;

        this.idProdu = generarID();
    }


    mostrarProductos(){
        if(producto.length > 0){ 
            limpiarHTML();
            for(let i = 0; i < cliente.length ; i++){
                if(listaClientes){
                    listaClientes.innerHTML += `
                        <div class="info-clientes">
                            <p>ID Cliente: ${this.id}</p>
                            <p>${super.mostrarDatos()}</p>
                            <p>Tipo Cliente: ${this.tipoCliente}</p>
                        </div>
                    `
                }
            }
        }
    }

}

export default Cliente;