import express from "express";
import morgan from "morgan";
import router from "./routes/productos.routes";

const app = express();
const cors = require("cors"); // traigo los cors para darle acceso a cualquier ruta de peticion

// settigs
app.set("port",4000);
app.use(cors()); // le paso a la app el cors para poderme conectar desde el front

// middlewares
app.use(morgan("dev")); // esto me sirve para ver en consola las cosas que van pasando en mi api
app.use(express.json())

// routes
app.use(router);



export default app;