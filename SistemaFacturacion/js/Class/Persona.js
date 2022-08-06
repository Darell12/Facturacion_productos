class Persona{
    // Atributos - 
    constructor(cedula, nombres, apellidos, fechaNacimiento, genero, nacionalidad){
        this.cedula = cedula;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.genero = genero;
        this.nacionalidad = nacionalidad;
    }

    // Metodos logica del negocio
    mostrarDatos(){
        console.log(`Cedula: ${this.cedula}  
              \nNombre: ${this.nombres} 
            \nApellidos: ${this.apellidos} 
            \nFec Nacimiento: ${this.fechaNacimiento} 
            \nGenero: ${this.genero}
            \nNacionalidad: ${this.nacionalidad}`);
    }
}

export default Persona;