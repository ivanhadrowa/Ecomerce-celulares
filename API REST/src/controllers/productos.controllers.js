import {getConnection} from "../database/database";

const getProductos= async (req,res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre, precio FROM products");
        res.json(result);
    }   catch(error)   {
        res.status(500);
        res.send(error.message)
    }
};

const getProductosPorId = async (req,res) => {
    try{
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre, precio FROM products WHERE id = ?",id);
        res.json(result);
    }   catch(error)   {
        res.status(500);
        res.send(error.message)
    }
};

const actualizarProducto = async (req,res) => {
    try{
        const {id} = req.params;
        const {nombre, precio} = req.body;
        if( id == undefined ||nombre == undefined || precio == undefined){
            res.status(400).json({message:"revisar campos"});
        }
        const nuevoProducto = {nombre, precio};
        const connection = await getConnection();
        const result = await connection.query("UPDATE products SET ? WHERE id = ?", [nuevoProducto,id]);
        res.json(result);
    }   catch(error)   {
        res.status(500);
        res.send(error.message)
    }
};

const eliminarProducto = async (req,res) => {
    try{
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM products WHERE id = ?",id);
        res.json(result);
    }   catch(error)   {
        res.status(500);
        res.send(error.message)
    }
};


const registrarProducto= async (req,res) => {
    try{
        const {nombre, precio} = req.body;
        if( nombre == undefined || precio == undefined){
            res.status(400).json({message:"revisar campos"});
        }
        const nuevoProducto = {nombre, precio};
        const connection = await getConnection();
        await connection.query("INSERT INTO products SET ?", nuevoProducto);
        res.json("producto creado")
    }   catch(error)   {
        res.status(500);
        res.send(error.message)
    }
};

export const methods = { getProductos, registrarProducto, getProductosPorId, eliminarProducto, actualizarProducto};