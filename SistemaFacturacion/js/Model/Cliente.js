import Persona from './Persona.js';
import { generarID, limpiarHTML } from '../helpers/funciones.js';
import { cliente } from '../index.js';

const listaClientes = document.querySelector('.container-registro')

class Cliente extends Persona{
    // Constructor
    constructor(tipoDoc, nidentificacion, genero, nombre, apellido, fecha_nac, nacio, tipoCliente){
        super(tipoDoc, nidentificacion, genero, nombre, apellido, fecha_nac, nacio);
        this.id = generarID();
        this.tipoCliente = tipoCliente;
    }


    mostrarCliente(){
        if(cliente.length > 0){ 
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