export const generarID = () => {
    const random = Math.random().toString(36).substr(16);
    const fecha = Date.now().toString(36);
    return random + fecha;
}

export const limpiarHTML = () => {
    const listaClientes = document.querySelector('.container-registro');
    if(listaClientes){
        while(listaClientes.firstChild){
            listaClientes.removeChild(listaClientes.firstChild);
        };
    };
    // const listaGuardado = document.querySelector('#vehiculoGuardado');
    // if(listaGuardado){
    //     while(listaGuardado.firstChild){
    //         listaGuardado.removeChild(listaGuardado.firstChild);
    //     };
    // };
}