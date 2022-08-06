class Producto{

///Atributos

constructor(nombre, precio, stock, empresa){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.empresa = empresa;
}

//METODOS

mostrarProductos(){
    console.log(`Nombre: ${this.nombre}
    \nPrecio: ${this.precio}
    \nStock: ${this.stock}
    \nEmpresa: ${this.empresa}`)
}


}

export default Producto;