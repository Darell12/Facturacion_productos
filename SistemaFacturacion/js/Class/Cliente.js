import Persona from './Persona.js';

class Cliente extends Persona{
    // Constructor
    constructor(cedula, nombres, apellidos, fechaNacimiento, genero, nacionalidad,id, tipoCliente){
        super(cedula, nombres, apellidos, fechaNacimiento, genero, nacionalidad);
        this.id = id;
        this.tipoCliente = tipoCliente;
    }

    mostrarDatos(){
        super.mostrarDatos();
        console.log(`\nId: ${this.id} \nTipoCliente: ${this.tipoCliente}`);
    }

}

export default Cliente;