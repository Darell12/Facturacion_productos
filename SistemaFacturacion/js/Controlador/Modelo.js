import Persona from "../Model/Persona.js"
import Cliente from "../Model/Cliente.js"
import Producto from "../Class/Producto.js"
import { cliente } from "../index.js"
import { producto } from "../index.js"

export const guardarCliente = (tipoDoc, nidentificacion, genero, nombre, apellido, fecha_nac, nacio) => {
    const persona = new Cliente(tipoDoc, nidentificacion, genero, nombre, apellido, fecha_nac, nacio)
    cliente.push(persona)
    persona.mostrarCliente()
}

export const guardarProduto = (nombre, precio, stock, empresa) => {
    const productos = new Producto(nombre, precio, stock, empresa);
    producto.push(producto);
    productos.mostrarProductos();
}

