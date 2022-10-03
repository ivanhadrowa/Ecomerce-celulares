const url = "http://localhost:4000/";

const getProductos = async () => {
    await fetch(`http://localhost:4000/`, {'method': 'GET', })
    .then(res => res.json())
    .then(response => console.log(response));
}
getProductos();

const getProducto = async () => {
    
    await fetch(`http://localhost:4000/${id}`, {'method': 'GET', })
    .then(res => res.json())
    .then(response => console.log(response));
}
getProducto();

const deleteProducto = async () => {
    await fetch(`http://localhost:4000/:id`, {'method': 'DELETE', })
    .then(res => res.json())
    .then(response => console.log(response));
}
deleteProducto();


