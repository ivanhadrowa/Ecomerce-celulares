const url = "http://localhost:4000/";

const getProductos = async () => {
    await fetch(`http://localhost:4000/`, {'method': 'GET', })
    .then(res => res.json())
    .then(response => productos = response);

    const listaProductos = document.getElementById('listaProductos')
    const fragment = document.createDocumentFragment();

    for(i in productos){
        const nombreProducto = document.createElement('p');
        nombreProducto.textContent = productos[i].nombre;
        fragment.appendChild(nombreProducto)

        const precioProducto = document.createElement('p');
        precioProducto.textContent = productos[i].precio;
        fragment.appendChild(precioProducto)

    }
    listaProductos.appendChild(fragment)
}
getProductos();

const getProducto = async () => {
    await fetch(`http://localhost:4000/${id}`, {'method': 'GET', })
    .then(res => res.json())
    .then(response => console.log(response));

}
// getProducto();

const deleteProducto = async () => {
    await fetch(`http://localhost:4000/:id`, {'method': 'DELETE', })
    .then(res => res.json())
    .then(response => console.log(response));
}
 // deleteProducto();


